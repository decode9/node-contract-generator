const main = async () => {
    const nftContractFactory = await ethers.getContractFactory('ERC721Royalties')
    const nftContract = await nftContractFactory.deploy(process.env.ContractName, process.env.ContractSymbol, process.env.baseURI, process.env.NotRevealedURI)
    await nftContract.deployed()
    console.log('Contract deployed to:', nftContract.address)
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()