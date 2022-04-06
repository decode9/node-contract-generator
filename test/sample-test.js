const { ethers } = require("hardhat");
const { assert } = require('chai')

describe('EternalNFT Contract', async () => {
	let nft
	let nftContractAddress
	let tokenId

	// Deploys the EternalNFT contract and the EternalMarket contract before each test
	beforeEach('Setup Contract', async () => {
		const flowNFT = await ethers.getContractFactory('FlowNFT')
		nft = await flowNFT.deploy()
		await nft.deployed()
		nftContractAddress = await nft.address
	})

	// Tests address for the EternalNFT contract
	it('Should have an address', async () => {
		assert.notEqual(nftContractAddress, 0x0)
		assert.notEqual(nftContractAddress, '')
		assert.notEqual(nftContractAddress, null)
		assert.notEqual(nftContractAddress, undefined)
	})

	// Tests name for the token of EternalNFT contract
	it('Should have a name', async () => {
		// Returns the name of the token
		const name = await nft.name()
    console.log(name)
		assert.equal(name, 'FlowNFT')
	})

	// Tests symbol for the token of EternalNFT contract
	it('Should have a symbol', async () => {
		// Returns the symbol of the token
		const symbol = await nft.symbol()

		assert.equal(symbol, 'Flow')
	})

	// Tests for NFT minting function of EternalNFT contract using tokenID of the minted NFT
	it('Should be able to mint NFT', async () => {
		// Mints a NFT
		let txn = await nft.createFlowNFT('https://gateway.pinata.cloud/ipfs/QmREKbD5jouiu6xHNnZveFCkXFJahLzZm3iohhGshdLEFs/')
		let tx = await txn.wait()

		// tokenID of the minted NFT
		let event = tx.events[0]
		let value = event.args[2]
		tokenId = value.toNumber()

		assert.equal(tokenId, 0)

		// Mints another NFT
		txn = await nft.createFlowNFT('https://gateway.pinata.cloud/ipfs/QmREKbD5jouiu6xHNnZveFCkXFJahLzZm3iohhGshdLEFs/')
		tx = await txn.wait()

		// tokenID of the minted NFT
		event = tx.events[0]
		value = event.args[2]
		tokenId = value.toNumber()

		assert.equal(tokenId, 1)
	})
})