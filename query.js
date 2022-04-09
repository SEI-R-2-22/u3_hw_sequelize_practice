const { Player, Tier, Role, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}


// TIER QUERIES

const findAllTiers = async () => {
  // const findAllTiers = await Tier.findAll()
  // stringify(findAllTiers)
}

const createNewTier = async () => {
  // const newTier = await Tier.create(
  //   {
  //     raidName: 'Test Tier',
  //     expansion: 'Test Expac',
  //     bossCount: 20
  //   }
  // )
  // stringify(newTier)
}

const updateTier = async () => {
  // const tierUpdate = await Tier.update({ raidName: 'Updated Test Tier'}, {
  //   where: {
  //     id: 3
  //   }
  // })
  // stringify(tierUpdate)
}

const deleteTier = async () => {
  // const deleteTier = await Tier.destroy({
  //   where: {
  //     raidName: 'Updated Test Tier',
  //   }
  // })
  // stringify(deleteTier)
}

// ROLE QUERIES

const findAllRoles = async () => {
  // const findAllRoles = await Role.findAll()
  // stringify(findAllRoles)
}

const createNewRole = async () => {
  // const newRole = await Role.create(
  //   {
  //     roleName: 'Test Role',
  //     stat: 'Test State',
  //     type: 'Test Type'
  //   }
  // )
  // stringify(newRole)
}


const updateRole = async () => {
  // const roleUpdate = await Role.update({ roleName: 'Updated Test Role'}, {
  //     where: {
  //         id: 9
  //       }
  //     })
  //     stringify(roleUpdate)
}
    
const deleteRole = async () => {
  // const deleteRole = await Role.destroy({
  //   where: {
  //     roleName: 'Updated Test Role',
  //   }
  // })
  // stringify(deleteRole)
}
    
    // PLAYER QUERIES

const findAllPlayers = async () => {
  // const findAllPlayers = await Player.findAll()
  // stringify(findAllPlayers)
}

const createNewPlayer = async () => {
  // const newPlayer = await Player.create(
  //   {
  //     playerName: 'Test Player',
  //     class: 'Test Class',
  //     role_id: 1,
  //     raid_id: 1
  //   }
  // )
  // stringify(newPlayer)
}

const updatePlayer = async () => {
  // const playerUpdate = await Player.update({ playerName: 'Updated Test Player'}, {
  //     where: {
  //         id: 28
  //       }
  //     })
  //     stringify(playerUpdate)
}

const deletePlayer = async () => {
  // const deletePlayer = await Player.destroy({
  //   where: {
  //     playerName: 'Updated Test Player',
  //   }
  // })
  // stringify(deletePlayer)
}

const findByClass = async () => {
  // const showWarriors = await Player.findAll({
  //   where: {
  //     class: 'Warrior'
  //   }
  // })
  // stringify(showWarriors)
}

const findRosterByTier = async () => {
  // const showRoster = await Player.findAll({
  //   where: {
  //     raid_id: 1
  //   }
  // })
  // stringify(showRoster)
} 

const findAllByRole = async () => {
  // const showTanks = await Player.findAll({
  //   where: {
  //     [Op.or]: [
  //       { role_id: 3 },
  //       { role_id: 4 }
  //     ]
  //   }
  // })
  // stringify(showTanks)
}

const findClassByRole = async () => {
  // const showShamanHealers = await Player.findAll({
  //   where: {
  //     [Op.and]: [
  //       { role_id: 2 },
  //       { class: 'Shaman' }
  //     ]
  //   }
  // })
  // stringify(showShamanHealers)
}


const run = async () => {
  try {
    await findAllTiers()
    await findAllRoles()
    await findAllPlayers()
    await createNewTier()
    await createNewRole()
    await createNewPlayer()
    await updateTier()
    await updateRole()
    await updatePlayer()
    await findByClass()
    await findRosterByTier()
    await findAllByRole()
    await findClassByRole()
    await deleteTier()
    await deleteRole()
    await deletePlayer()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
