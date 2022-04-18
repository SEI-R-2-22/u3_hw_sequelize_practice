const { Agency, Models, ModelsDot, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllAgencies = async () => {
  const result = await Agency.findAll()
  stringify(result)
}

const findAllModels = async () => {
  const result = await Models.findAll()
  stringify(result)
}

const findModelsDot = async () => {
  const result = await ModelsDot.findAll()
  stringify(result)
}

const createAgency = async () => {
  const result = await Agency.create({
    name: 'One Model Management',
    campaign: 7000
  })
  stringify(result)
}

const createModel = async () => {
  const result = await Agency.create({
    name: 'Nneoma Anosike',
    campaigns_booked: 5000,
    lists: 20
  })
  stringify(result)
}

const createModelsDot = async () => {
  const result = await ModelsDot.create({
    name: 'Nneoma Anosike',
    shows_walked: 5000,
    list: 20,
    campaigns: 5000
  })
  stringify(result)
}

const updateAgency = async () => {
  const result = await Agency.update(
    {
      name: 'IMG Model Management'
    },
    { where: { name: 'One Model Management' } }
  )
  stringify(result)
}

const updateModel = async () => {
  const result = await Models.update(
    {
      name: 'Nneoma'
    },
    { where: { name: 'Nneoma Anosike' } }
  )
  stringify(result)
}

const updateModelsDot = async () => {
  const result = await ModelsDot.update(
    {
      name: 'Nneoma'
    },
    { where: { name: 'Nneoma Anosike' } }
  )
  stringify(result)
}

const deleteAgency = async () => {
  const result = await Agency.destroy({
    where: { name: 'IMG Model Management' }
  })
  stringify(result)
}

const deleteModel = async () => {
  const result = await Models.destroy({ where: { name: 'Nneoma' } })
  stringify(result)
}

const deleteModelsDot = async () => {
  const result = await ModelsDot.destroy({ where: { name: 'Nneoma' } })
  stringify(result)
}

async function main() {
  try {
    await findAllAgencies()
    await findAllModels()
    await findModelsDot()
    await createAgency()
    await createModel()
    await createModelsDot()
    await updateAgency()
    await updateModel()
    await updateModelsDot()
    await deleteAgency()
    await deleteModel()
    await deleteModelsDot()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
