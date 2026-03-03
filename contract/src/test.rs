#![cfg(test)]

use super::*;
use soroban_sdk::{testutils::Address as _, Env};

fn setup() -> (Env, InsightArenaContractClient<'static>) {
    let env = Env::default();
    env.mock_all_auths();
    let contract_id = env.register(InsightArenaContract, ());
    let client = InsightArenaContractClient::new(&env, &contract_id);
    (env, client)
}

#[test]
fn test_create_public_competition() {
    let (env, client) = setup();
    let creator = Address::generate(&env);

    let result = client.create_competition(&1, &creator, &false, &0);
    assert_eq!(result, symbol_short!("Created"));
}

#[test]
fn test_create_private_competition() {
    let (env, client) = setup();
    let creator = Address::generate(&env);

    let result = client.create_competition(&2, &creator, &true, &9999);
    assert_eq!(result, symbol_short!("Created"));
}

#[test]
#[should_panic(expected = "competition already exists")]
fn test_create_duplicate_competition_panics() {
    let (env, client) = setup();
    let creator = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    client.create_competition(&1, &creator, &false, &0);
}

#[test]
fn test_join_public_competition() {
    let (env, client) = setup();
    let creator = Address::generate(&env);
    let user = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    let result = client.join_competition(&1, &user, &0);
    assert_eq!(result, symbol_short!("Joined"));
    assert_eq!(client.get_member_count(&1), 1);
}

#[test]
fn test_join_private_competition_correct_code() {
    let (env, client) = setup();
    let creator = Address::generate(&env);
    let user = Address::generate(&env);

    client.create_competition(&1, &creator, &true, &1234);
    let result = client.join_competition(&1, &user, &1234);
    assert_eq!(result, symbol_short!("Joined"));
}

#[test]
#[should_panic(expected = "invalid invite code")]
fn test_join_private_competition_wrong_code_panics() {
    let (env, client) = setup();
    let creator = Address::generate(&env);
    let user = Address::generate(&env);

    client.create_competition(&1, &creator, &true, &1234);
    client.join_competition(&1, &user, &0000);
}

#[test]
#[should_panic(expected = "user already joined")]
fn test_join_twice_panics() {
    let (env, client) = setup();
    let creator = Address::generate(&env);
    let user = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    client.join_competition(&1, &user, &0);
    client.join_competition(&1, &user, &0);
}

#[test]
fn test_submit_prediction() {
    let (env, client) = setup();
    let creator = Address::generate(&env);
    let user = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    client.join_competition(&1, &user, &0);

    let result = client.submit_prediction(&1, &user, &1, &500);
    assert_eq!(result, symbol_short!("Predicted"));
    assert_eq!(client.get_reward_pool(&1), 500);
}

#[test]
#[should_panic(expected = "user has not joined this competition")]
fn test_submit_prediction_without_joining_panics() {
    let (env, client) = setup();
    let creator = Address::generate(&env);
    let intruder = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    client.submit_prediction(&1, &intruder, &1, &100);
}

#[test]
#[should_panic(expected = "stake must be positive")]
fn test_submit_zero_stake_panics() {
    let (env, client) = setup();
    let creator = Address::generate(&env);
    let user = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    client.join_competition(&1, &user, &0);
    client.submit_prediction(&1, &user, &0, &0);
}

#[test]
fn test_full_competition_flow() {
    let (env, client) = setup();
    let creator = Address::generate(&env);
    let alice = Address::generate(&env);
    let bob = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);

    client.join_competition(&1, &alice, &0);
    client.join_competition(&1, &bob, &0);
    assert_eq!(client.get_member_count(&1), 2);

    client.submit_prediction(&1, &alice, &1, &700);
    client.submit_prediction(&1, &bob, &0, &300);

    assert_eq!(client.get_reward_pool(&1), 1000);

    let result = client.resolve_competition(&1, &creator, &1);
    assert_eq!(result, symbol_short!("Resolved"));
    assert!(client.is_resolved(&1));
    assert_eq!(client.get_outcome(&1), 1);

    let alice_score = client.get_score(&1, &alice);
    let bob_score = client.get_score(&1, &bob);

    assert!(alice_score > 0, "Alice should have a positive score");
    assert_eq!(bob_score, 0, "Bob should have score 0");
}

#[test]
#[should_panic(expected = "only the creator can resolve this competition")]
fn test_non_creator_cannot_resolve() {
    let (env, client) = setup();
    let creator = Address::generate(&env);
    let attacker = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    client.resolve_competition(&1, &attacker, &1);
}

#[test]
#[should_panic(expected = "competition already resolved")]
fn test_cannot_resolve_twice() {
    let (env, client) = setup();
    let creator = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    client.resolve_competition(&1, &creator, &1);
    client.resolve_competition(&1, &creator, &1);
}

#[test]
#[should_panic(expected = "competition not yet resolved")]
fn test_get_outcome_before_resolve_panics() {
    let (env, client) = setup();
    let creator = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    client.get_outcome(&1);
}

#[test]
fn test_initial_reward_pool_is_zero() {
    let (env, client) = setup();
    let creator = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    assert_eq!(client.get_reward_pool(&1), 0);
}

#[test]
fn test_initial_member_count_is_zero() {
    let (env, client) = setup();
    let creator = Address::generate(&env);

    client.create_competition(&1, &creator, &false, &0);
    assert_eq!(client.get_member_count(&1), 0);
}
