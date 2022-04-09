const { User, WorkoutRoutine, Movement, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}
// Find all users
const findAllUsers = async () => {
  const result = await User.findAll()
  stringify(result)
}
// Find all workout routines
const findAllWorkoutRoutines = async () => {
  const result = await WorkoutRoutine.findAll()
  stringify(result)
}
// Find all movements
const findAllMovements = async () => {
  const result = await Movement.findAll()
  stringify(result)
}
// Create user
const createNewUser = async () => {
  const result = await User.create({
    firstName: 'Cynthia',
    lastName: 'Leopold',
    email: 'cynthia@leopold.com',
    password: '123456'
  })
  stringify(result)
}
// Create workout routine
const createNewWorkout = async () => {
  const result = await WorkoutRoutine.create({
    title: 'Second Workout Routine',
    targetRegion: 'upper body',
    trainingType: 'low impact',
    duration: '20 minutes'
  })
  stringify(result)
}
// Create movement
const createMovement = async () => {
  const result = await Movement.create({
    name: 'Bicep curl',
    instructions:
      'Hold weight, lower arm slowly, then return to starting position',
    sets: 3,
    reps: 10
  })
  stringify(result)
}

const updateUser = async () => {
  const result = await User.update(
    { firstName: 'Jenna-Ariele' },
    { where: { firstName: 'Jenna' } }
  )
  stringify(result)
}

const updateWorkoutRoutine = async () => {
  const result = await WorkoutRoutine.update(
    { title: 'Edited Title for First Workout Routine' },
    { where: { title: 'First Workout Routine' } }
  )
  stringify(result)
}

const updateMovement = async () => {
  const result = await Movement.update(
    {
      instructions:
        'stand with heels pressed together, toes turned outward, bend your knees, lower and lift up'
    },
    { where: { name: 'plié' } }
  )
  stringify(result)
}

const deleteUser = async () => {
  const result = await User.destroy({
    where: { firstName: 'Cynthia' }
  })
  stringify(result)
}

const deleteWorkoutRoutine = async () => {
  const result = await WorkoutRoutine.destroy({
    where: { title: 'Second Workout Routine' }
  })
  stringify(result)
}

const deleteMovement = async () => {
  const result = await Movement.destroy({
    where: { name: 'Bicep curl' }
  })
  stringify(result)
}

const run = async () => {
  try {
    await findAllUsers()
    await findAllWorkoutRoutines()
    await findAllMovements()
    await createNewUser()
    await createNewWorkout()
    await createMovement()
    await updateUser()
    await updateWorkoutRoutine()
    await updateMovement()
    await deleteUser()
    await deleteWorkoutRoutine()
    await deleteMovement()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
