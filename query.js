const { User, Workouts, WorkoutRoutine, sequelize} = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
    console.log(JSON.stringify(data, null, 2))
}


/////////////////// READ 📖 📖 ///////////////////
const findAllUsers = async () => {
    const find = await User.findAll()
    console.log(find)
    stringify(result)
}

const findAllWorkout = async () => {
    const find = await Workouts.findAll()
    console.log(find)
    stringify(result)
}

const findAllWorkoutRoutine = async () => {
    const find = await WorkoutRoutine.findAll()
    console.log(find)
    stringify(result)
}


/////////////////// CREATE 🔨 🔨 ///////////////////
const createUser= async () => {
    const create = await User.create(
        {
            firstName: 'Kobe',
            lastName: 'Bryant',
            email: 'kobe@demo.com',
            password: 'Kbryant'
        }
    )
    console.log(create)
    stringify(result)
}

const createWorkout = async () => {
    const create = await Workouts.create(
        {
            workoutName: 'Sit Up',
            instruction: 'Lie down on your back, keep your knees bent, and your back and feet flat on the mat. Slowly lift your torso and sit up.',
            sets: 4,
            reps: 16
        }
    )
    console.log(create)
    stringify(result)
}

const createWorkoutRoutine = async () => {
    const create = await WorkoutRoutine.create(
        {
            routineName: '6 Pack',
            restTime: '90sec',
            targetMuscle: 'Abs',
        }
    )
    console.log(create)
    stringify(result)
}


/////////////////// UPDATE 💻 💻///////////////////
const updateUser = async () => {
    const update = await User.update(
        { lastName: 'Legend'},
        { where:{ lastName: 'Doe' } }
    )
    console.log(update)
    stringify(result)
}

const updateWorkout = async () => {
    const update = await Workouts.update(
        { sets: 4 },
        { where:{ sets:3 } }
    )
    console.log(update)
    stringify(result)
}

const updateWorkoutRoutine = async () => {
    const update = await WorkoutRoutine.update(
        { targetMuscle: 'Core' },
        { where:{ id: 10 } }
    )
    console.log(update)
    stringify(result)
}


/////////////////// DELETE 🚫 🚫///////////////////
const deleteUser = async () => {
    const result = await User.destroy(
        { where: { id: 4 }});
    console.log(`deleted row(s): ${count}`);
    stringify(result)
}

const deleteWorkout = async () => {
    const result = await Workouts.destroy(
        { where: { id: 10 }});
    console.log(`deleted row(s): ${count}`);
    stringify(result)
}

const deleteWorkoutRoutine = async () => {
    const result = await Workouts.destroy(
        { where: { id: 10 }});
    console.log(`deleted row(s): ${count}`);
    stringify(result)
}






  const run = async () => {
    try {
    //   await findAllUsers()
    //   await findAllWorkout()
    //   await findAllWorkoutRoutine()
    //   await createUser()
    //   await createWorkout()
    //   await createWorkoutRoutine()
    //   await updateUser()
    //   await updateWorkout()
    //   await updateWorkoutRoutine()
    //   await deleteUser()
    //   await deleteWorkout()
    //   await deleteWorkoutRoutine()
    } catch (error) {
    } finally {
      await sequelize.close()
    }
  }
  
  run()