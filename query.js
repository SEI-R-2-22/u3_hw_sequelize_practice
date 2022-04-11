const { User, Game, Designer, sequelize} = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
    console.log(JSON.stringify(data, null, 2))
}


const findAllUsers = async () => {
    const users = await User.findAll()
    console.log(users)
    stringify(result)
}

const findAllDesigners = async () => {
    const designers = await Designer.findAll()
    console.log(designers)
    stringify(result)
}

const findAllGames = async () => {
    const games = await Game.findAll()
    console.log(games)
    stringify(result)
}



const newUser= async () => {
    const user = await User.create(

        {
            firstName: 'Nate',
            lastName: 'Comptonian',
            userName: 'Natedawg',
            password: 'dogg'    
        },
    )
    console.log(user)
    stringify(result)
}

const newDesigner = async () => {
    const designer = await Designer.create(
        {
            firstName: 'Dude',
            lastName: 'Bro',
            games: 'Like Whoa, Man'
        }
    )
    console.log(designer)
    stringify(result)
}

const newGame = async () => {
    const game = await Game.create(
        {
            gameName: 'The Castles of Burgundy',
            designer: 'Stefan Feld',
            genres: ['strategy', 'dice', 'point salad'],
            playtime: '30-90'
        }
    )
    console.log(game)
    stringify(result)
}



const updateUser = async () => {
    const dUser = await User.update(
        { name: 'Trev'},
        {where: { name: 'Trevor'}}
    )
    console.log(dUser)
    stringify(result)
}

const updateDesigner = async () => {
    const dDesigner = await Designer.update(
        { name: 'Buddy'},
        { where:{ name: 'Dude' } }
    )
    console.log(dDesigner)
    stringify(result)
}

const updateGame = async () => {
    const dGame = await Game.update(
        { playtime: '45-75' },
        { where:{ name: 'The Castles of Burgundy'} }
    )
    console.log(dGame)
    stringify(result)
}


const destroyUser = async () => {
    const result = await User.destroy(
        { where: { id : 5 }});
    console.log(`deleted row(s): ${count}`);
    stringify(result)
}

const deleteDesigner = async () => {
    const result = await Designer.destroy(
        { where: { id: 5 }});
    console.log(`deleted row(s): ${count}`);
    stringify(result)
}

const deleteGame = async () => {
    const result = await Game.destroy(
        { where: { id : 5 }});
    console.log(`deleted row(s): ${count}`);
    stringify(result)
}






  const run = async () => {
    try {
        await findAllDesigners()
        await findAllGames()
        await findAllUsers()
        await newDesigner()
        await newGame()
        await newUser()
        await updateDesigner()
        await updateGame()
        await updateUser()
        await deleteDesigner()
        await deleteGame()
        await destroyUser()
    } catch (error) {
    } finally {
      await sequelize.close()
    }
  }
  
  run()

