const { chracters, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

async function main() {
  try {

    // Create Chracter
    const newChracter = await chracters.create({
      name: 'Osen',
      role: 'Great Genral',
    })
    stringify(newChracter)

    // Read
    const allChracters = await chracters.findAll()
    stringify(allChracters)

    // Update

    const updatedChracter = await chracters.update({ name: 'Genral Osen' }, { where: { name: 'Osen' } })
    stringify(updatedChracter)

    // Delete

    const deletedChracter = await chracters.destroy({ where: { name: 'Genral Osen' } })
    const restOfChracters = await chracters.findAll()
    stringify(restOfChracters)

  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()