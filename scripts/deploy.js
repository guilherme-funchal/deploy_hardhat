async function main() {

  const CarbonoNeutroSerproERC1155 = await ethers.getContractFactory("CarbonoNeutroSerproERC1155");
  const carbono = await CarbonoNeutroSerproERC1155.deploy();

  await carbono.deployed();
  console.log(`Contract deployed to ${carbono.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
