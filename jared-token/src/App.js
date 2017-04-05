import React, { Component } from 'react';
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';

var jaredTokenAbi = [{"constant":true,"inputs":[],"name":"supply","outputs":[{"name":"sup","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
var jaredTokenAdd = "0xcc43e26cdd5cdc7dde4fc6b214468919dc5f1692";
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[1];
var token = web3.eth.contract(jaredTokenAbi).at(jaredTokenAdd);
var account1 = web3.eth.accounts[0];
var account2 = web3.eth.accounts[1];
var balance1 = token.balanceOf(account1);
var balanceStr = balance1.toString(10);
class App extends Component {
  render() {
    console.log(balance1);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Truffle</h2>
        </div>
        <p className="App-intro">
           <b>Web3 Version: </b> {web3.version.api}
        </p>
        <p>
        <b>Mining: </b> {web3.eth.blockNumber}
        </p>
        <p>
        <b>Account 1: </b> {account1}
        </p>
        <p>
        <b>Account 2: </b> {account2}
        </p>
        <p>
        <b>Balance1:</b> {balanceStr}
        </p>
      </div>
    );
  }
}

export default App;
