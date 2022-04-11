const { Walker, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllWalkers = async () => {
  const result = await Walker.findAll()
  stringify(result)
}

const createNewWalker = async () => {
  const result = await Walker.create({
    fullname: 'Danny Walker',
    avatar: 'https://i.pravatar.cc/100',
    email: 'danny@walker.edu',
    fullAddress: '456 Mango Lane'
  })
  stringify(result)
}

const deleteWalkerWhere = async () => {
  const result = await Walker.destroy({
    where: { fullname: 'Danny Walker' }
  })
  stringify(result)
}

const updateWalker = async () => {
  const result = await Walker.update(
    { fullName: 'Danny Runner' },
    { where: { fullName: 'Danny Walker' } }
  )
  stringify(result)
}

const run = async () => {
  try {
    //await findAllWalkers()
    //await createNewWalker()
    //await deleteWalkerWhere()
    //await updateWalker()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
