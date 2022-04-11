const { snack, sequelize } = require('./models')
const Sequelize = require('sequelize')
const snack = require('./models/snack')
const snack = require('./models/snack')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllSnacks = async () => {
const snacks = await snack.findAll()
return snacks
}

const createNewSnack = async () => {
const newSnack = await snack.create({
  name: 'M&M', company_id: 'Mars', main_ingredient_id: 'Peanut'
})
return newSnack
}

const updateSnack = async () => {
const snack = await snack.update(
  {name: 'm&ms'}, 
  {where: {name: 'M&M'}}
)
return snack
}

const deleteSnack = async () => {
const snack = await snack.destroy(
  {where: {name: 'm&ms'}}
)
return snack
}

const run = async () => {
    try {
        await findAllSnacks()
        await createNewSnack()
        await updateSnack()
        await deleteSnack()
    } catch (error) {
    } finally {
    await sequelize.close()
    }
}
run()