pragma solidity ^0.4.8;

//mapping(uint => mapping(uint => uint)) mymap;
//mapping(address => mapping(uint => Struct[])) someName;
//function testNestedMappings() {
  //@log test nested mappings
//  mymap[1][2] = 42;


contract Debt {
  mapping (address => mapping(address => uint)) debts;

//  mapping(uint => mapping(uint => uint)) mymap;
//  mymap[1][2] = 42;
//  myaddress[friend1address: 5]
function Debt() {
  debts[0xb5569de6c618b2bab323960d07a096ab191f9640][0xef2c7fd3ce0afd6b57e6966ed3fa4c00fc865062] = 55;
//  return true;
}



  //function addDebt(address user, uint amount) {

  //}


//  function removeDebt(address user, uint amount)

  function getDebt(address user1, address user2) constant returns (uint) {
    return debts[user1][user2];
  }
}
