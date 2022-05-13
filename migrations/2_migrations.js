const hijack = artifacts.require("hijack");

module.exports = function (deployer) {
  deployer.deploy(hijack);
};
