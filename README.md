# Smart Contract Generator Project

This Project is created for smart contract generation using hardhat, there is available the following hardhat commands

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat verify
node scripts/sample-script.js
npx hardhat help
```

There is available only rinkeby testnet network for ethereum.

## Enviroment Variables

The next enviroment variables are needed for the correct functionality of the deployment and verification command

```
InfuraKey=<Your-Infura-Project-Key>
PrivateKey=<Your-Wallet-Private-Key>
EtherscanApiKey=<Your-Infura-Project-Key>
```

## Create ERC721 

For create a ERC721 nft with royalties at rarible use the following enviroment variables

```
ContractName=<Your-Contract-Name>
ContractSymbol=<Your-Contract-Symbol>
BaseURI=<Your-Base-URI-Metadata-Information>
NotRevealedURI=<Your-Base-URI-For-Not-Reveal-Token>
```

Once configure the enviroment variables run the next command

```shell
npx hardhat run scripts/deploy-ERC721Royalties.js --network rinkeby
```

## Verify Contract 

For contract verification use the following command

```shell
npx hardhat verify --network rinkeby <Contract-Address> <Constructor-Variable-1> <Constructor-Variable-2> 
```

Add constructor variables as you need