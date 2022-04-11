const { Vet2, Owner, Pet, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

async function main() {
  try {
    // find all vets
    const vets = await Vet2.findAll()
    stringify(vets)

  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()