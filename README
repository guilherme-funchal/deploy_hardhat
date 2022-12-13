
**1)Criar o diretório do Hardhat**
#mkdir hardhat
#cd hardhat

**2)Instalar os plugins**

#npx hardhat
#npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0'
#npm i @openzeppelin/contracts

**3)Criar o script de deploy na diretório scripts**
<pre>
async function main() {

  const Contrato = await ethers.getContractFactory("Contrato ");
  const contrato  = await Contrato.deploy();

  await contrato.deployed();
  console.log(`Contract deployed to ${contrato.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

<pre>

**4)Criar o arquivo de configuração do Hardhat**
<pre>
require("@nomiclabs/hardhat-ethers");

// task action function receives the Hardhat Runtime Environment as second argument
task(
  "blockNumber",
  "Prints the current block number",
  async (_, { ethers }) => {
    await ethers.provider.getBlockNumber().then((blockNumber) => {
      console.log("Current block number: " + blockNumber);
    });
  }
);

module.exports = {};
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};
</pre>

**5)Compilar o contrato**
#npx hardhat compile

**6)Fazer o deploy**
#npx hardhat run --network localhost scripts/deploy.js



