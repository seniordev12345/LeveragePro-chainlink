const {deployContract, sendTxn, writeTmpAddresses} = require("../shared/helpers");

async function main() {
  const aggregator = await deployContract("AccessControlledOffchainAggregator", [0, 0, 0, 0, 0, '0x0000000000000000000000000000000000000000', "99999999999999999999999999999", 0, '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', 8, 'VLX / USD'], "AccessControlledOffchainAggregator")

  writeTmpAddresses({
    AccessControlledOffchainAggregator: aggregator.address
  })
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
