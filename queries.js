const { Wrestler, School, Tournament, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const createAthlete = async () => {
  const result = await Wrestler.create({
    firstName: 'Luke',
    lastName: 'Etheridge',
    grade: 11,
    weightClass: 138,
    isVarsity: true
  })
  stringify(result)
}

const createSchool = async () => {
  const result = await School.create({
    city: 'East Boston',
    enrollment: 2000
  })
  stringify(result)
}

const createTournament = async () => {
  const result = await Tournament.create({
    hostSchool: 'Taconic',
    isVarsity: true
  })
  stringify(result)
}

const findAllAthletes = async () => {
  const result = await Wrestler.findAll()
  stringify(result)
}

const findAllSchools = async () => {
  const result = await School.findAll()
  stringify(result)
}

const findAllTournaments = async () => {
  const result = await Tournament.findAll()
  stringify(result)
}

const updateAthlete = async () => {
  const result = await Wrestler.update(
    { grade: 12 },
    { where: { firstName: 'Jaden' } }
  )
  stringify(result)
}

const updateSchool = async () => {
  const result = await School.update(
    { city: 'Worcester' },
    { where: { enrollment: 2000 } }
  )
  stringify(result)
}

const updateTournament = async () => {
  const result = await Tournament.update(
    { isVarsity: false },
    { where: { hostSchool: 'Cohasset' } }
  )
  stringify(result)
}

const deleteAthlete = async () => {
  const result = await Wrestler.destroy({ where: { id: 2 } })
  stringify(result)
}

const deleteSchool = async () => {
  const result = await School.destroy({ where: { id: 3 } })
  stringify(result)
}

const deleteTournament = async () => {
  const result = await Tournament.destroy({ where: { id: 2 } })
  stringify(result)
}

async function main() {
  try {
    //await createAthlete()
    //await createSchool()
    //await createTournament()
    //await findAllAthletes()
    //await findAllSchools()
    //await findAllTournaments()
    //await updateAthlete()
    //await updateSchool()
    //await updateTournament()
    //await deleteAthlete()
    //await deleteSchool()
    //await deleteTournament()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
