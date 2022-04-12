const {houstonrockets, miamiheat, phoenixsuns, sequelize} = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op



const findAllRocketsPlayers = async () => {
    const rocketPlayer = await houstonrockets.findAll()
    console.log(rocketPlayer)
}

const findAllHeatPlayers = async () => {
    const heatPlayer = await miamiheat.findAll()
    console.log(heatPlayer)
}

const findAllSunsPlayers = async () => {
    const sunsPlayers = await phoenixsuns.findAll()
    console.log(sunsPlayers)
}

const newRocketsPlayer = async => {
    const player = await houstonrockets.create(
        {
        firstName:'Dennis',
        lastName: 'Schroder',
        position: 'PG',
        pointsPerGame: 10.9 

    },
    )
    console.log(player)
}
const newHeatPlayer = async => {
        const player2 = await miamiheat.create(
            {
            firstName:'Victor',
            lastName: 'Oladipo',
            position: 'SG',
            pointsPerGame: 12.4
    
        }
        )
    console.log(player2)

}

const newSunsPlayer = async => {
    const player3 = await phoenixsuns.create(
        {
        firstName: 'Frank',
        lastName: 'Kaminsky',
        position: 'C',
        pointsPerGame: 10.6

    }
    )
    console.log(player3)
}

const updateRocketsPlayer = async => {
    const updatedRocketsPlayer = await houstonrockets.update(
        {pointsPerGame: '14.2'},
        {where: {pointsPerGame: '17.9'}}

    )
}

const updateHeatPlayer = async => {
    const updatedHeatPlayer = await miamiheat.update(
        {pointsPerGame: '17.7'},
        {where: {pointsPerGame: '21.4'}}

    )
}

const updateSunsPlayer = async => {
    const updatedSunsPlayer = await phoenixsuns.update(
        {pointsPerGame: '23.5'},
        {where: {pointsPerGame: '26.8'}}

    )
}

const deleteRocketsPlayer = async () => {
    const deletePlayer = await houstonrockets.destroy(
        {where:{firstName: 'Christian'}}
    )
}

const deleteHeatPlayer = async () => {
    const deleteMiamiPlayer = await miamiheat.destroy(
        {where:{firstName: 'Bam'}}
    )
}

const deleteSunsPlayer = async () => {
    const deletePhoenixPlayer = await phoenixsuns.destroy(
        {where:{firstName: 'Chris'}}
    )
}

const run = async () => {
    try {
        await findAllRocketsPlayers()
        await findAllHeatPlayers()
        await findAllSunsPlayers
        await newRocketsPlayer()
        await newHeatPlayer()
        await newSunsPlayer()
        await updateRocketsPlayer()
        await updateHeatPlayer()
        await updateSunsPlayer()
        await deleteRocketsPlayer()
        await deleteHeatPlayer()
        await deleteSunsPlayer
    }catch (error) {

    } finally {
        await sequelize.close()
    }
}
run()