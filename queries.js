const { Golfball, Golfer, Tournament, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

// Retrieve

const findAllGolfers = async () => {
  const result = await Golfer.findAll()
  stringify(result)
}

const findAllGolfballs = async () => {
  const result = await Golfball.findAll()
  stringify(result)
}

const findAllTournament = async () => {
  const result = await Tournament.findAll()
  stringify(result)
}

const findGolfballById = async (id) => {
  const result = await Golfball.findByPk(id)
  stringify(result)
}

const findGolferByRating = async () => {
  const result = await Golfer.findOne({
    where: { ranking: 1 }
  })
  stringify(result)
}

const findAllGolfballsByRating = async () => {
  const result = await Golfball.findAll({
    where: { price: 3 }
  })
  stringify(result)
}

// Create

const createGolfer = async () => {
  const result = await Golfer.create({
    name: 'Tiger Woods',
    age: '50',
    rating: 2
  })
  stringify(result)
}

const createGolfball = async () => {
  const result = await Golfball.create({
    name: 'NXT',
    brand: 'Titleist',
    price: 2
  })
  stringify(result)
}

const createTournament = async () => {
  const result = await Tournament.create({
    name: 'US Open',
    location: 'Pebble Beach',
    date: 'June 2, 2020'
  })
  stringify(result)
}

// Update

const updateTournament = async () => {
  const result = await Tournament.update(
    {
      date: 'April 20, 2023'
    },
    {
      where: { name: 'Masters' }
    }
  )
  stringify(result)
}

const updateGolfball = async () => {
  const result = await Golfball.update(
    {
      price: 5
    },
    {
      where: { name: 'ProV 1' }
    }
  )
  stringify(result)
}

const updateGolfer = async () => {
  const result = await Golfer.update(
    {
      age: 46
    },
    {
      where: { name: 'Tiger Woods' }
    }
  )
  stringify(result)
}

// Delete

const deleteGolfer = async () => {
  const result = await Golfer.destroy({
    where: { name: 'Tiger Woods' }
  })
  stringify(result)
}

const deleteGolfball = async () => {
  const result = await Golfball.destroy({
    where: { name: 'NXT' }
  })
  stringify(result)
}

const deleteTournament = async () => {
  const result = await Tournament.destroy({
    where: { name: 'US Open' }
  })
  stringify(result)
}

async function main() {
  try {
    // await findAllTournament()
    // await updateTournament()
    // await createGolfer()
    // await await deleteGolfer()
    // await createGolfer()
    // await findAllGolfballsByRating()
    // await findGolferByRating()
    // await findGolfballById(1)
    // await findAllGolfers()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
