#![no_std]
use soroban_sdk::{contract, contractimpl, Env, Symbol, symbol_short, Address};

#[contract]
pub struct InsightArenaContract;

#[contractimpl]
impl InsightArenaContract {
    /// Creates a new leaderboard-based competition on InsightArena.
    /// Regular markets and seasonal competitions are core to the platform.
    pub fn create_competition(_env: Env, _comp_id: u32) -> Symbol {
        // In a complete implementation, this would save the `comp_id` 
        // to contract storage to initialize the reward pool and leaderboard.
        
        symbol_short!("Created")
    }

    /// Allows a user to participate in the competition to earn points.
    pub fn join_competition(_env: Env, _comp_id: u32, user: Address) -> Symbol {
        // Ensure the user actually signed this transaction themselves
        user.require_auth();

        // In a complete implementation, this would add the user to the 
        // leaderboard tracked by the contract for this `comp_id`.
        
        symbol_short!("Joined")
    }
}

mod test;
