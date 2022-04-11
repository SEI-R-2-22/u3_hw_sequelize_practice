const { BasketballCoach, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
    console.log(JSON.stringify(data, null, 2))
}

async function main() {
    try {

        // CREATE
        const newCoach = await BasketballCoach.create({
            coachName: 'Steve Nash',
            coachEthnicity: 'English-Welsh',
        })
        stringify(newCoach)

        const newPlayer = await BasketballPlayer.create({
          playerName: 'Kevin Durant',
          playerEthnicity: 'American',
          team: 'Nets'
        })
        stringify(newPlayer)

        const newTeam = await BasketballTeam.create({
          teamName: 'Nets',
          arenaLocation: 'Barclays Center',
          teamCoach: 'Steve Nash'
        })
        stringify(newTeam)

        // READ
        const allCoaches = await BasketballCoach.findAll()
        stringify(allCoaches)

        const allPlayers = await BasketballPlayer.findAll()
        stringify(allPlayers)

        const allTeams = await BasketballTeam.findAll()
        stringify(allTeams)

        // UPDATE

        const updatedCoach = await BasketballCoach.update({ coachName: 'Ryan Hatamosa'}, { where: { coachName: 'Steve Nash'}})
        stringify(updateCoach)

        const updatedPlayer = await BasketballPlayer.update({ playerName: 'Russel Westbrook'}, { where: { playerName: 'Kevin Durant'}})
        stringify(updatedPlayer)

        const updatedTeam = await BasketballTeam.update({ teamName: 'Lakers'}, { where: { teamName: 'Nets'}})
        stringify(updatedTeam)

        // DELETE

        const deletedCoach = await BasketballCoach.destroy({ where: { coachName: "Wes Unseld Jr."}})
        const coaches = await BasketballCoach.findAll()
        stringify(coaches)

        const deletedPlayer = await BasketballPlayer.destroy({ where: { playerName: "Rui Hachimura"}})
        const players = await BasketballPlayer.findAll()
        stringify(players)

        const deletedTeam = await BasketballTeam.destroy({ where: { teamName: "Wizards"}})
        const teams = await BasketballTeam.findAll()
        stringify(teams)

    } catch (error) {
        console.log(error)
    } finally {
        await sequelize.close()
    }
}

main()
