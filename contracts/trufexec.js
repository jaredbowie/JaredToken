module.exports = function(callback) {


/*var theBlock = web3.eth.getBlock(794896, true);
var transaction = theBlock.transactions[0];
console.log(transaction);
*/

var debtAbi = [{"constant":true,"inputs":[{"name":"user1","type":"address"},{"name":"user2","type":"address"}],"name":"getDebt","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
var debtAdd = "0x875778d63a2aaed4c2f7305ad6808334409d8cb4";
var debt = web3.eth.contract(debtAbi).at(debtAdd);
var result = debt.getDebt("0xb5569de6c618b2bab323960d07a096ab191f9640", "0xef2c7fd3ce0afd6b57e6966ed3fa4c00fc865062");
console.log(result);
var result2 = debt.getDebt("0xb5569de6c618b2bab323960d07a096ab191f9641", "0xef2c7fd3ce0afd6b57e6966ed3fa4c00fc865061");
console.log(result2);

//var wealthAbi = [{"constant":false,"inputs":[{"name":"aGuy","type":"address"},{"name":"aWealth","type":"address"}],"name":"addWealth","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getWealth","outputs":[{"name":"","type":"address[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"someWealth","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
//var wealthAdd =  "0x34bcfc573796795abb3552bb9805994a9eaa306c";
//var wealth = web3.eth.contract(wealthAbi).at(wealthAdd);
//var result = wealth.getWealth.call();
//console.log(result);
//wealth.addWealth("0xf0369509b9d2b6b4501e5016c9cf6013f1d135cb", "0xfc7f4ed967fdf4b4c060b276a6d6516d2fc5b415", {from: web3.eth.accounts[0], gas: 200000});
//var result = wealth.getWealth.call();
//console.log(result);


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
