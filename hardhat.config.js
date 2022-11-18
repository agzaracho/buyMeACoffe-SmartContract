require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const { ALCHEMY_API_KEY_URL, GOERLI_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
   apiKey: ETHERSCAN_API_KEY,
 },
};
