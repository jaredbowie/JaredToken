pragma solidity ^0.4.8;

//mapping(uint => mapping(uint => uint)) mymap;
//mapping(address => mapping(uint => Struct[])) someName;
//function testNestedMappings() {
  //@log test nested mappings
//  mymap[1][2] = 42;


contract Debt {
  mapping (address => mapping(address => uint)) debts;
  mapping (address => mapping(address => uint)) pendingDebts;

//  debt[debtor][creditor]=55;

function Debt() {
}

function addDebt(address debtor, uint amount) returns (uint pendingBalance) {
  pendingDebts[msg.sender]
  balanceDebtor = debts[debtor][creditor];
  balanceCreditor = debts[creditor][debtor];
  return balance;
}


//  function removeDebt(address user, uint amount)

  function getDebt(address user1, address user2) constant returns (uint) {
    return debts[user1][user2];
  }
}
