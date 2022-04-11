const { Game, Studio, Upcoming, Sequelize } = require('./models')
const { Op } = require('sequelize')
const sequelize = require('sequelize')

const stringify = (data) => {
    console.log(JSON.stringify(data, null, 2))
  }
  async function main() {
      try {

        //find all games
        const games = await Game.findAll()

        console.log(games)

//   create new game :
  const newGame = await Game.create({
    title: 'Greek Guy', 
    studio: 'Santa Monica Studios', 
    releaseDate: "Never"
  })
  console.log(newGame)

   //   update game
    const game = await Game.update(
      {name: "God of War (2005)"},
      {where: {name: "God of War"}}
    )
      console.log(game)

        //delete game
      const deleteGame = await Game.destroy(
        {where: {name: "Greek Guy" }}
      )
      console.log(deleteGame)
  
      } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
  }
main()