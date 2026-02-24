#![cfg(test)]

use super::*;
use soroban_sdk::{Env, symbol_short, testutils::Address as _};

#[test]
fn test_competition_flow() {
    let env = Env::default();
    env.mock_all_auths(); // Allow the test to mock the `require_auth` call
    
    let contract_id = env.register(InsightArenaContract, ());
    let client = InsightArenaContractClient::new(&env, &contract_id);

    // Test creating a competition
    let comp_id: u32 = 1;
    let create_result = client.create_competition(&comp_id);
    assert_eq!(create_result, symbol_short!("Created"));

    // Test joining a competition
    let user = Address::generate(&env);
    let join_result = client.join_competition(&comp_id, &user);
    assert_eq!(join_result, symbol_short!("Joined"));
}
