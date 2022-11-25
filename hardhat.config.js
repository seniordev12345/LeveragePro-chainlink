/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-contract-sizer")
require('@typechain/hardhat')

const {
  VELAS_URL,
  VELAS_DEPLOY_KEY,
} = require("./env.json")

module.exports = {
  networks: {
    localhost: {
      timeout: 120000
    },
    hardhat: {
      allowUnlimitedContractSize: true
    },
    velas: {
      url: VELAS_URL,
      chainId: 106,
      gasPrice: 10000000,
      accounts: [VELAS_DEPLOY_KEY]
    },
    etherscan: {
      apiKey: "YOUR_ETHERSCAN_API_KEY"
    }
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5"
  }
}
