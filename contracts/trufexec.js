module.exports = function(callback) {


/*var theBlock = web3.eth.getBlock(794896, true);
var transaction = theBlock.transactions[0];
console.log(transaction);
*/
var myTokenAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"TokenInfo","outputs":[{"name":"tokenInfo","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
var myTokenAdd = "0x342a13fbab6dac8258c152d317c7c41537ceef6e";
var myToken = web3.eth.contract(myTokenAbi).at(myTokenAdd);
console.log('yo');
var result = myToken.TokenInfo.call();
console.log(result);

//  var greeterAbi = [{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newGreeting","type":"string"}],"name":"setGreeting","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]
//  var greeterAdd =  "0x1ecbfeb5c880cab1395fa30a22a94e36c9a21b04";
//  var greeter = web3.eth.contract(greeterAbi).at(greeterAdd);

//  var result = greeter.greet.call();
//var weiBalance1 = web3.eth.getBalance(web3.eth.accounts[0]);
//var etherBalance1 = web3.fromWei(weiBalance1.toString(10), 'ether');
//console.log(etherBalance1);
//greeter.setGreeting('new greeting444444444455', {from: web3.eth.accounts[0], gas: 200000});
//greeter.setGreeting('new greeting444444444455', {from: web3.eth.accounts[0], gas: 200000});
//var result = greeter.greet.call();
//console.log(result);
//var weiBalance2 = web3.eth.getBalance(web3.eth.accounts[0]);
//var etherBalance2 = web3.fromWei(weiBalance2.toString(10), 'ether');
//console.log(etherBalance2);
//var balanceDif = weiBalance1 - weiBalance2;
//console.log("balancedif: ");
//console.log(balanceDif.toString(10), 'ether');
//  var balanceDif = etherBalance2-etherBalance2;
//    console.log("spent " + balanceDif);

  //var poeAbi = [{"constant":false,"inputs":[{"name":"document","type":"string"}],"name":"notarize","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"document","type":"string"}],"name":"calculateProof","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"proof","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"}];
  //var poeAdd = "0xb07bad35a0a5d6fc3687c35a817b65ba2ba999fb";
  //var poe = web3.eth.contract(poeAbi).at(poeAdd);
  //web3.eth.defaultAccount = accounts[0];


/*  poe.calculateProof("5").call(function(error,returned) {
    if(!error) {
      console.log('success');
      console.log(returned);
      console.log(returned.toString(10));
  } else {
    console.log('error');
    console.error(error);
}});*/

//poe.then(function(instance){poe=instance})

//var result = contract.myFunc.call(param1, param2, { gas: 200000 });

//console.log(web3.eth.accounts[0]);
//var result = poe.notarize('An amazing idea', {from: web3.eth.accounts[0], gas: 2000000});
//var result = poe.notarize.call('An amazing idea2', {from: web3.eth.accounts[0], gas: 2000000});
//console.log('result: ');
//console.log(result);
//var noteResult =
//console.log(noteResult);
/*token.giveBalance(giveTo, 5).call(function(error, returned) {
  if(!error) {
    console.log('success');
    console.log(returned);
    console.log(returned.toString(10));
  } else {
    console.log('error');
    console.error(error);
}});*/
}
