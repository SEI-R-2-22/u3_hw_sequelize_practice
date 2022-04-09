const { Star, sequelize } = require('./models')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllStars = async () => {
  const stars = await Star.findAll()
  stringify(stars)
}

const createAlpheratz = async () => {
  const alpheratz = await Star.create({
    name: 'Alpheratz',
    type: 'B8',
    lightYears: 97,
    constellation: 'Andromeda'
  })
  stringify(alpheratz)
}

const updateSirius = async () => {
  const sirus = await Star.update(
    {
      type: 'A1V'
    },
    { where: { name: 'Sirius' } }
  )
  stringify(sirus)
}

const findFelis = async () => {
  const found = await Star.findAll({
    where: { name: 'Felis' }
  })
  stringify(found)
}

const destroyRigel = async () => {
  const supernova = await Star.destroy({
    where: { name: 'Rigel' }
  })
  stringify(supernova)
}

const run = async () => {
  try {
    // await findAllStars()
    // await createAlpheratz()
    // await updateSirius()
    // await findFelis()
    // await destroyRigel()
  } catch (e) {
  } finally {
    await sequelize.close()
  }
}

run()
