const { User, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllUsers = async () => {
//   const allUsers = await User.findAll()
//   stringify(allUsers)
}

const createNewUser = async () => {
//   const newUser = await User.create({
//     firstName: "Jenna",
//     lastName: "Allgeier",
//     email: "jenna.allgeier@gmail.com",
//     username: "jenna.allgeier",
//     password: "password",
//   })
//   stringify(newUser)
}

const findOneUser = async () => {
    // const oneUser = await User.findone({ where: {
    //     firstName: "Jenna"
    // }})
    // stringify(oneUser)
  }

const deleteWhere = async () => {
//   const deleteUsersNamedJane = await User.destroy({ where: {
//     firstName: "Jane"
//   }})
//   stringify(deleteUsersNamedJane)
}

const updateUser = async () => {
  // Change lastname "Doe" to "Smith"
  // UPDATE users SET lastName='Smith' WHERE lastName = 'Doe'
  const updateUserNamedJenna = await User.update({
      password: "notpassword"}, { where: { password: "password" }})
      stringify(updateUserNamedJenna)
}

const run = async () => {
  try {
    await findAllUsers()
    await createNewUser()
    await updateUser()
    await findOneUser()
    await deleteWhere()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()

  