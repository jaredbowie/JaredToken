pragma solidity ^0.4.8;

contract HelloWorld {
  uint public balance;

  function HelloWorld() {
    balance=5;
  }
function getBalance() constant returns (uint nowBalance) {
  nowBalance=balance;
  return nowBalance;
}

}
