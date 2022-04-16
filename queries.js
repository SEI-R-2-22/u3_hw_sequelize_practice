const { Pet, Vet, Owner, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

async function main() {
    try {
    //find all owners
    const owners = await Owner.findAll()
    stringify(owners)
    
    } catch (error) {
        console.log(error)
    } finally {
        await sequelize.close()
    }
}

main()