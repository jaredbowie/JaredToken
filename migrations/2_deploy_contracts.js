//var ConvertLib = artifacts.require("./ConvertLib.sol");
//var MetaCoin = artifacts.require("./MetaCoin.sol");
//var JaredToken = artifacts.require("./JaredToken.sol");
//var HelloWorld = artifacts.require("./HelloWorld.sol");
//var ProofOfExistence1 = artifacts.require("./ProofOfExistence1.sol");
//var Greeter = artifacts.require("./Greeter.sol");
var Debt = artifacts.require("./Debt.sol");

module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, MetaCoin);
  //deployer.deploy(MetaCoin);
  //deployer.deploy(JaredToken);
  //deployer.deploy(HelloWorld);
  //deployer.deploy(ProofOfExistence1);
  //deployer.deploy(Greeter, "hiyo");
  deployer.deploy(Debt);
};
