pragma solidity ^0.4.8;

contract mortal {
    /* Define variable owner of the type address*/
    address owner;

    /* this function is executed at initialization and sets the owner of the contract */
    function mortal() { owner = msg.sender; }

    /* Function to recover the funds on the contract */
    function kill() { if (msg.sender == owner) selfdestruct(owner); }
}

contract Greeter is mortal {
    /* define variable greeting of the type string */
    string greeting;

    /* this runs when the contract is executed */
    function Greeter() public {
        greeting = "first greeting";
    }

    /* main function */
    function greet() constant returns (string) {
        return greeting;
    }

    function setGreeting(string _newGreeting) returns (bool success) {
        greeting = _newGreeting;
        return true;
    }
}
