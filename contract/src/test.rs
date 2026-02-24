#![cfg(test)]

use super::*;
use soroban_sdk::{Env, symbol_short};

#[test]
fn test() {
    let env = Env::default();
    let contract_id = env.register(InsightArenaContract, ());
    let client = InsightArenaContractClient::new(&env, &contract_id);

    let result = client.hello();
    assert_eq!(result, symbol_short!("Arena"));
}
