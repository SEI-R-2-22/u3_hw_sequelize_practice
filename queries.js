const { chores, errands, Users } = require('./models')
const { Op } = require('sequelize')
const Sequelize = require('sequelize')
const stringify = function (data) {
  console.log(JSON.stringify(data, null, 4))
}

//Users CRUD
// const findAllUsers = async () => {
//     const user = await Users.findAll()
//       console.log(user)
//   }

//   const createUser = async () => {
//     const user = await Users.create({
//       firstName: 'Austin',
//       lastName: 'H',
//   })
//   console.log(user)
// }

// const deleteUser = async () => {
//     const user = await Users.destroy({
//         where: {firstName : 'Austin'}
//       })
//         console.log(user)
//   }

//   const updateUser = async () => {
//     const user = await User.update(
//       {lastName: "Smith"},
//       {where: {lastName: "H"}}
//     )
//     console.log(user)
//   }

  //Chores CRUD
//   const findAllChores = async () => {
//     const chores = await chores.findAll()
//       console.log(chores)
//   }

//   const createChore = async () => {
//         const chores = await chores.create({
//           todo: 'Clean Dishes',
//           location: 'home',
//       })
//       console.log(chores)
//     }

// const deleteChore = async () => {
//     const chores = await chores.destroy({
//         where: {todo : 'Clean Dishes'}
//       })
//         console.log(chores)
//   }

// const updateChore = async () => {
//     const chores = await chores.update(
//       {location: 'Summer Home'},
//       {where: {location: 'Home'}}
//     )
//     console.log(chores)
//   }

//   //Errands CRUD
//   const findAllErrands = async () => {
//     const errands = await errands.findAll()
//       console.log(errands)
//   }

//   const createErrand = async () => {
//     const errands = await errands.create({
//       todo: 'Get Groceries',
//       location: 'Ralphs',
//   })
//   console.log(errands)
// }

// const deleteErrand = async () => {
//     const errands = await errands.destroy({
//         todo: 'Get Groceries',
//       location: 'Ralphs',
//       })
//         console.log(errands)
//   }

//   const updateErrand = async () => {
//     const errands = await errands.update(
//       {location: 'ALbertsons'},
//       {where: {location: 'Ralphs'}}
//     )
//     console.log(errands)
//   }

  const run = async () => {
    try {
      await findAllUsers()
      await createUser()
      await updateUser()
      await deleteUser()
      await findAllChores()
      await findAllErrands()
      await createErrand()
      await createChore()
      await deleteChore()
      await deleteErrand()
      await updateErrand()
      await updateChore()
    } catch (error) {
    } finally {
      await sequelize.close()
    }
  }
  
  run()
