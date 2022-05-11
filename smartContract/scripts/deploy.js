const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const Like = await hre.ethers.getContractFactory("Like");
  const like = await Like.deploy(false);

  await like.deployed();

  console.log("Like deployed to:", like.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
