const { Golfball, Golfer, Tournament, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllGolfers = async () => {
  const result = await Golfer.findAll()
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

const createGolfer = async () => {
  const result = await Golfer.create({
    name: 'Tiger Woods',
    age: '50',
    rating: 2
  })
  stringify(result)
}

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

const deleteGolfer = async () => {
  const result = await Golfer.destroy({
    where: { name: 'Tiger Woods' }
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
