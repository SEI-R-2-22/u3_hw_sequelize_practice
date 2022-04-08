const {
  aromatic_herb,
  stabalizing_herb,
  tonifying_herb,
  sequelize
} = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllAromaticHerbs = async () => {
  const result = await aromatic_herb.findAll()
  stringify(result)
}

const findAllStabalizingHerbs = async () => {
  const result = await stabalizing_herb.findAll()
  stringify(result)
}

const findAllTonifyingHerbs = async () => {
  const result = await tonifying_herb.findAll()
  stringify(result)
}

const createNewTonifyingHerb = async () => {
  const result = await tonifying_herb.create({
    name: 'codnopsis root',
    treatment: 'tonifies the lung',
    cost: 50
  })
  stringify(result)
}

const createNewStabalizingHerb = async () => {
  const result = await stabalizing_herb.create({
    name: 'mume fruit',
    treatment: 'generates fluid and alleviates thirst',
    cost: 50
  })
  stringify(result)
}

const createNewAromaticHerb = async () => {
  const result = await aromatic_herb.create({
    name: 'resin of rose maloes',
    treatment: 'opens the orifices',
    cost: 50
  })
  stringify(result)
}

const updateAromaticHerb = async () => {
  const result = await aromatic_herb.update(
    {
      cost: 45
    },
    { where: { cost: 50 } }
  )
  stringify(result)
}

const updateTonifyingHerb = async () => {
  const result = await tonifying_herb.update(
    {
      cost: 45
    },
    { where: { cost: 50 } }
  )
  stringify(result)
}

const updateStabalizingHerb = async () => {
  const result = await stabalizing_herb.update(
    {
      cost: 45
    },
    { where: { cost: 50 } }
  )
  stringify(result)
}

const deleteAromaticHerb = async () => {
  const result = await aromatic_herb.destroy({
    where: { name: 'resin of rose maloes' }
  })
  stringify(result)
}

const deleteStabalizingHerb = async () => {
  const result = await stabalizing_herb.destroy({
    where: { name: 'mume fruit' }
  })
  stringify(result)
}

const deleteTonifyingHerb = async () => {
  const result = await tonifying_herb.destroy({
    where: { name: 'codnopsis root' }
  })
  stringify(result)
}

const run = async () => {
  try {
    await findAllAromaticHerbs()
    await findAllStabalizingHerbs()
    await findAllTonifyingHerbs()
    await createNewStabalizingHerb()
    await createNewAromaticHerb()
    await createNewTonifyingHerb()
    await updateStabalizingHerb()
    await updateAromaticHerb()
    await updateTonifyingHerb()
    await deleteStabalizingHerb()
    await deleteTonifyingHerb()
    await deleteAromaticHerb()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
