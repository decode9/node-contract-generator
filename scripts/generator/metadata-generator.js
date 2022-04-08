const fs = require('fs')
const template = require('./template')
const dir = './METADATA';

const createMetadata = async (amount = 1, description, external_url, image, name, attributes) => {

   

    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    for (let i = 1; i <= amount; i++) {
        attributes[2].value = i
        attributes[3].value = new Date().getTime()
        const nftMetadata = template(description, external_url, image, name, JSON.stringify(attributes))
        fs.writeFileSync(`${dir}/${i}`, nftMetadata)
        console.log(`File #${i} is created`)
    }
}

createMetadata(15, 'description', 'external_url', 'image', 'name', [])