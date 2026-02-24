#![no_std]
use soroban_sdk::{contract, contractimpl, Env, Symbol, symbol_short};

#[contract]
pub struct InsightArenaContract;

#[contractimpl]
impl InsightArenaContract {
   
    pub fn hello(_env: Env) -> Symbol {
        symbol_short!("Arena")
    }
}

mod test;
