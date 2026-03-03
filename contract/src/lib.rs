#![no_std]
use soroban_sdk::{
    contract, contractimpl, contracttype, symbol_short, vec, Address, Env, Map, Symbol, Vec,
};

#[contracttype]
#[derive(Clone)]
pub enum DataKey {
    Competition(u32),
    Score(u32, Address),
    Stake(u32, Address),
    Members(u32),
    Predictions(u32),
    Resolved(u32),
    InviteCode(u32),
    Outcome(u32),
    RewardPool(u32),
}

#[contracttype]
#[derive(Clone)]
pub struct Competition {
    pub comp_id: u32,
    pub creator: Address,
    pub is_private: bool,
    pub is_open: bool,
}

#[contracttype]
#[derive(Clone)]
pub struct Prediction {
    pub predictor: Address,
    pub predicted_outcome: u32,
    pub stake: i128,
}

#[contract]
pub struct InsightArenaContract;

#[contractimpl]
impl InsightArenaContract {
    pub fn create_competition(
        env: Env,
        comp_id: u32,
        creator: Address,
        is_private: bool,
        invite_code: u32,
    ) -> Symbol {
        creator.require_auth();

        if env
            .storage()
            .persistent()
            .has(&DataKey::Competition(comp_id))
        {
            panic!("competition already exists");
        }

        let competition = Competition {
            comp_id,
            creator: creator.clone(),
            is_private,
            is_open: true,
        };

        env.storage()
            .persistent()
            .set(&DataKey::Competition(comp_id), &competition);

        env.storage()
            .persistent()
            .set(&DataKey::RewardPool(comp_id), &(0_i128));

        let empty_members: Vec<Address> = vec![&env];
        env.storage()
            .persistent()
            .set(&DataKey::Members(comp_id), &empty_members);

        let empty_preds: Vec<Prediction> = vec![&env];
        env.storage()
            .persistent()
            .set(&DataKey::Predictions(comp_id), &empty_preds);

        if is_private {
            env.storage()
                .persistent()
                .set(&DataKey::InviteCode(comp_id), &invite_code);
        }

        env.storage()
            .persistent()
            .set(&DataKey::Resolved(comp_id), &false);

        symbol_short!("Created")
    }

    pub fn join_competition(env: Env, comp_id: u32, user: Address, invite_code: u32) -> Symbol {
        user.require_auth();

        let competition: Competition = env
            .storage()
            .persistent()
            .get(&DataKey::Competition(comp_id))
            .expect("competition not found");

        if !competition.is_open {
            panic!("competition is closed");
        }

        if competition.is_private {
            let stored_code: u32 = env
                .storage()
                .persistent()
                .get(&DataKey::InviteCode(comp_id))
                .expect("invite code not found");
            if invite_code != stored_code {
                panic!("invalid invite code");
            }
        }

        let mut members: Vec<Address> = env
            .storage()
            .persistent()
            .get(&DataKey::Members(comp_id))
            .unwrap_or(vec![&env]);

        for i in 0..members.len() {
            if members.get(i).unwrap() == user {
                panic!("user already joined");
            }
        }

        members.push_back(user.clone());
        env.storage()
            .persistent()
            .set(&DataKey::Members(comp_id), &members);

        env.storage()
            .persistent()
            .set(&DataKey::Score(comp_id, user.clone()), &(0_i64));

        symbol_short!("Joined")
    }

    pub fn submit_prediction(
        env: Env,
        comp_id: u32,
        user: Address,
        predicted_outcome: u32,
        stake: i128,
    ) -> Symbol {
        user.require_auth();

        if stake <= 0 {
            panic!("stake must be positive");
        }

        let competition: Competition = env
            .storage()
            .persistent()
            .get(&DataKey::Competition(comp_id))
            .expect("competition not found");

        if !competition.is_open {
            panic!("competition is closed");
        }

        let members: Vec<Address> = env
            .storage()
            .persistent()
            .get(&DataKey::Members(comp_id))
            .unwrap_or(vec![&env]);

        let mut member_found = false;
        for i in 0..members.len() {
            if members.get(i).unwrap() == user {
                member_found = true;
                break;
            }
        }
        if !member_found {
            panic!("user has not joined this competition");
        }

        let prediction = Prediction {
            predictor: user.clone(),
            predicted_outcome,
            stake,
        };

        let mut preds: Vec<Prediction> = env
            .storage()
            .persistent()
            .get(&DataKey::Predictions(comp_id))
            .unwrap_or(vec![&env]);

        preds.push_back(prediction);
        env.storage()
            .persistent()
            .set(&DataKey::Predictions(comp_id), &preds);

        let prev_stake: i128 = env
            .storage()
            .persistent()
            .get(&DataKey::Stake(comp_id, user.clone()))
            .unwrap_or(0_i128);
        env.storage().persistent().set(
            &DataKey::Stake(comp_id, user.clone()),
            &(prev_stake + stake),
        );

        let prev_pool: i128 = env
            .storage()
            .persistent()
            .get(&DataKey::RewardPool(comp_id))
            .unwrap_or(0_i128);
        env.storage()
            .persistent()
            .set(&DataKey::RewardPool(comp_id), &(prev_pool + stake));

        symbol_short!("Predicted")
    }

    pub fn resolve_competition(
        env: Env,
        comp_id: u32,
        caller: Address,
        correct_outcome: u32,
    ) -> Symbol {
        caller.require_auth();

        let mut competition: Competition = env
            .storage()
            .persistent()
            .get(&DataKey::Competition(comp_id))
            .expect("competition not found");

        if competition.creator != caller {
            panic!("only the creator can resolve this competition");
        }

        let already_resolved: bool = env
            .storage()
            .persistent()
            .get(&DataKey::Resolved(comp_id))
            .unwrap_or(false);
        if already_resolved {
            panic!("competition already resolved");
        }

        competition.is_open = false;
        env.storage()
            .persistent()
            .set(&DataKey::Competition(comp_id), &competition);

        env.storage()
            .persistent()
            .set(&DataKey::Outcome(comp_id), &correct_outcome);

        let preds: Vec<Prediction> = env
            .storage()
            .persistent()
            .get(&DataKey::Predictions(comp_id))
            .unwrap_or(vec![&env]);

        let total_pool: i128 = env
            .storage()
            .persistent()
            .get(&DataKey::RewardPool(comp_id))
            .unwrap_or(1_i128);

        for i in 0..preds.len() {
            let pred = preds.get(i).unwrap();
            if pred.predicted_outcome == correct_outcome {
                let points: i64 = (100_i128 * pred.stake * 1000_i128 / total_pool) as i64;

                let prev_score: i64 = env
                    .storage()
                    .persistent()
                    .get(&DataKey::Score(comp_id, pred.predictor.clone()))
                    .unwrap_or(0_i64);

                env.storage().persistent().set(
                    &DataKey::Score(comp_id, pred.predictor.clone()),
                    &(prev_score + points),
                );
            }
        }

        env.storage()
            .persistent()
            .set(&DataKey::Resolved(comp_id), &true);

        symbol_short!("Resolved")
    }

    pub fn get_leaderboard(env: Env, comp_id: u32) -> Map<Address, i64> {
        let members: Vec<Address> = env
            .storage()
            .persistent()
            .get(&DataKey::Members(comp_id))
            .unwrap_or(vec![&env]);

        let mut board: Map<Address, i64> = Map::new(&env);

        for i in 0..members.len() {
            let user = members.get(i).unwrap();
            let score: i64 = env
                .storage()
                .persistent()
                .get(&DataKey::Score(comp_id, user.clone()))
                .unwrap_or(0_i64);
            board.set(user, score);
        }

        board
    }

    pub fn get_score(env: Env, comp_id: u32, user: Address) -> i64 {
        env.storage()
            .persistent()
            .get(&DataKey::Score(comp_id, user))
            .unwrap_or(0_i64)
    }

    pub fn get_reward_pool(env: Env, comp_id: u32) -> i128 {
        env.storage()
            .persistent()
            .get(&DataKey::RewardPool(comp_id))
            .unwrap_or(0_i128)
    }

    pub fn get_member_count(env: Env, comp_id: u32) -> u32 {
        let members: Vec<Address> = env
            .storage()
            .persistent()
            .get(&DataKey::Members(comp_id))
            .unwrap_or(vec![&env]);
        members.len()
    }

    pub fn is_resolved(env: Env, comp_id: u32) -> bool {
        env.storage()
            .persistent()
            .get(&DataKey::Resolved(comp_id))
            .unwrap_or(false)
    }

    pub fn get_outcome(env: Env, comp_id: u32) -> u32 {
        let resolved: bool = env
            .storage()
            .persistent()
            .get(&DataKey::Resolved(comp_id))
            .unwrap_or(false);
        if !resolved {
            panic!("competition not yet resolved");
        }
        env.storage()
            .persistent()
            .get(&DataKey::Outcome(comp_id))
            .expect("outcome not found")
    }
}

mod test;
