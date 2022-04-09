const { User, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllUser = async () => {
  //Find all users
//    const users = await User.findAll()
//    stringify(users)
//   console.log(users)
  // Raw SQL: SELECT * FROM users;
}
const createNewUser = async () => {
   // Create a new user
    // const users = await User.create({
      
    //   userName: "Eloy",
    //   password: "Sauceda",
    //   region: "eloysauceda4@outlook.com",
    //   gender: "esauce",
      
    // })
    // console.log(users)
   
  }
  const updateUser = async () => {
    
    // const users = await User.update(
    //       {userName: "loli"},
    //       {where: {userName: "lola"}})
    // console.log(users)
  }

  const deleteUser = async () => {
      const users = await User.destroy(
            {where: {username: "Eloy"}}
      )
      console.log(users)
  }  


const run = async () => {
  try {
    await findAllUser()
    await createNewUser()
    await updateUser()
    await deleteUser()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()