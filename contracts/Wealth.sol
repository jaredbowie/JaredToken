pragma solidity ^0.4.8;

contract Wealth {

mapping (address => address[]) public someWealth;
address someGuy = 0xf0369509b9d2b6b4501e5016c9cf6013f1d135cb;

// {{mainaddress1={somecontractaddress1=
  //               somecontractaddress2=}}
  //                {adddres2=

  function Wealth() {
    someWealth[someGuy]=[0x83b33c7973f7612389fb960b85eb06742eb526ad, 0x8f604a15af84b5a7fe4a2750d3e942a90b367c98];
}


  function getWealth() constant returns (address[]) {
      return someWealth[someGuy];
    //return someWealth[0];
  }

  function addWealth(address aGuy, address aWealth) {
      someWealth[aGuy].push(aWealth);
  }
}
