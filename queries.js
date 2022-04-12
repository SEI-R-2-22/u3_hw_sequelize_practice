const {houstonrockets, miamiheat, phoenixsuns, sequelize} = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const findAllRocketsPlayers = async () => {
    const players = await houstonrockets.findAll()
    console.log(players)
}