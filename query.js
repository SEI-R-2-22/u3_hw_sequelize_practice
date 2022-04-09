const { Garden, Plant, Season, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllGardens = async () => {
  const result = await Garden.findAll()
  stringify(result)
}

const findAllPlants = async () => {
  const result = await Plant.findAll()
  stringify(result)
}

const findAllSeasons = async () => {
  const result = await Season.findAll()
  stringify(result)
}

// const findAllGardenById = async (id) => {
//   const result = await Garden.findByPk(id)
//   stringify(result)
// }

// const findAllPlantById = async (id) => {
//   const result = await Plant.findByPk(id)
//   stringify(result)
// }

// const findAllSeasonById = async (id) => {
//   const result = await Season.findByPk(id)
//   stringify(result)
// }

const createGarden = async () => {
  const result = await Garden.create({
    gardenType: 'Flower Garden',
    dirtType: 'Not good',
    plantType: 'Flora',
    waterSchedule: 'Daily',
    plantCount: 10
  })
  stringify(result)
}

const createPlant = async () => {
  const result = await Plant.create({
    plantName: 'Thyme',
    plantSeason: 'Winter',
    plantColor: 'Green',
    plantType: 'Herb'
  })
  stringify(result)
}

const createSeason = async () => {
  const result = await Season.create({
    season: 'Summer',
    weather: 'Sunny',
    plantType: 'Edible'
  })
  stringify(result)
}

const updateGarden = async () => {
  const result = await Garden.update(
    {
      gardenType: 'Hobbit Garden'
    },
    { where: { gardenType: 'Herb Garden' } }
  )
  stringify(result)
}

const updatePlant = async () => {
  const result = await Plant.update(
    {
      plantName: 'Dandilion Weed'
    },
    { where: { plantName: 'Dandilion' } }
  )
  stringify(result)
}

const updateSeason = async () => {
  const result = await Season.update(
    {
      weather: 'Sunshine'
    },
    { where: { weather: 'Light Rain' } }
  )
  stringify(result)
}

const deleteGarden = async () => {
  const result = await Garden.destroy({ where: { dirtType: 'Fertilized' } })
  stringify(result)
}
const deletePlant = async () => {
  const result = await Garden.destroy({ where: { plantColor: 'Yellow' } })
  stringify(result)
}
const deleteSeason = async () => {
  const result = await Garden.destroy({ where: { weather: 'Light Rain' } })
  stringify(result)
}

async function main() {
  try {
    // await findAllGardens()
    // await findAllPlants()
    // await findAllSeasons()
    // await findAllGardenById()
    // await findAllPlantById()
    // await findAllSeasonById()
    // await createGarden()
    // await createPlant()
    // await createSeason()
    // await updateGarden()
    // await updatePlant()
    // await updateSeason()
    // await deleteGarden()
    // await deletePlant()
    // await deleteSeason()
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
