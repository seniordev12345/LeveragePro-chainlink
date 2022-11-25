const {deployContract, sendTxn, writeTmpAddresses} = require("../shared/helpers");

async function main() {
  const priceFeed = await deployContract("EACAggregatorProxy", [], "Chainlink BNB_USD PriceFeed")

  writeTmpAddresses({
    vlxPriceFeed: priceFeed.address
  })
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
