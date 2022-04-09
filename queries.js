const {User, Music, Review, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
    console.log(JSON.stringify(data, null, 2))
  }

////////////////////USER CRUD OPERATIONS/////////////////////

//READ
const findAllUsers = async () => {
    const findUsers = await User.findAll()
    // console.log(findUsers)
  }

//CREATE
const createNewUser = async () => {
    const newUser = await User.create({
        name: 'Molly',
        username: 'mollymolly',
        email: 'mollyemail@gmail.com',
        password: 'mollymolly'
    })
    // console.log(newUser)
}

//UPDATE
const UpdateUser = async () => {
    const updated = await User.update({name:'Mary'}, {
        where: {
            name: 'Molly'
        }
    })
    // console.log(updated)
}

//DELETE
const DeleteUser = async () => {
    const deleted = await User.destroy({
        where: {
            name: 'Mary'
        }
    })
    // console.log(deleted)
}

///////////////////////MUSIC CRUD OPERATIONS///////////////////////

//READ
const findAllMusic = async () => {
    const findMusic = await Music.findAll()
    // console.log(findMusic)
  }

// //CREATE
const createNewMusic = async () => {
    const newMusic = await Music.create({
        title: 'Song4',
        duration: '245',
        genre: 'kpop',
        artist: 'Artist4'
    })
    // console.log(newMusic)
}

// //UPDATE
const UpdateMusic = async () => {
    const updated = await Music.update({genre:'rock'}, {
        where: {
            genre: 'country'
        }
    })
    // console.log(updated)
}

// //DELETE
const DeleteMusic = async () => {
    const deleted = await Music.destroy({
        where: {
            genre: 'kpop'
        }
    })
    // console.log(deleted)
}




///////////////////////REVIEW CRUD OPERATIONS///////////////////////

//READ
const findAllReviews = async () => {
    const findReviews = await Review.findAll()
    // console.log(findReviews)
  }

// //CREATE
const createNewReview = async () => {
    const newReview = await Review.create({
        name: 'Molly',
        comment: 'I hate this song!'
    })
    // console.log(newReview)
}

// //UPDATE
const UpdateReview = async () => {
    const updated = await Review.update({comment:'This is my new favorite song!'}, {
        where: {
            comment: 'I hate this song!'
        }
    })
    // console.log(updated)
}

// //DELETE
const DeleteReview = async () => {
    const deleted = await Review.destroy({
        where: {
            name: 'Molly'
        }
    })
    // console.log(deleted)
}


const run = async () => {
    try {
      await findAllUsers()
      await createNewUser()
      await UpdateUser()
      await DeleteUser()

      await findAllMusic()
      await createNewMusic()
      await UpdateMusic()
      await DeleteMusic()

      await findAllReviews()
      await createNewReview()
      await UpdateReview()
      await DeleteReview()
    } catch (error) {
    } finally {
      await sequelize.close()
    }
  }
  
  run()