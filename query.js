const {
  Quarterbacks,
  Runningbacks,
  WideReceivers,
  sequelize
} = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllQuarterbacks = async () => {
  const result = await Quarterbacks.findAll()
  stringify(result)
}

const findAllRunningbacks = async () => {
  const result = await Runningbacks.findAll()
  stringify(result)
}

const findAllWideReceivers = async () => {
  const result = await WideReceivers.findAll()
  stringify(result)
}

const createNewQuarterback = async () => {
  const result = await Quarterbacks.create({
    firstName: 'Kirk',
    lastName: 'Cousins',
    throwPower: '85',
    throwAccuracy: '85'
  })
  stringify(result)
}

const createNewRunningback = async () => {
  const result = await Runningbacks.create({
    firstName: 'Dalvin',
    lastName: 'Cook',
    speed: '90',
    jukeMove: '90'
  })
  stringify(result)
}

const createNewWideReceiver = async () => {
  const result = await WideReceivers.create({
    firstName: 'Tyreek',
    lastName: 'Hill',
    routeRunning: '95',
    hands: '95'
  })
  stringify(result)
}

const updateQuarterback = async () => {
  const result = await Quarterbacks.update(
    {
      throwAccuracy: '75'
    },
    { where: { lastName: 'Cousins' } }
  )
  stringify(result)
}

const updateRunningback = async () => {
  const result = await Runningbacks.update(
    {
      speed: '90'
    },
    { where: { lastName: 'Cook' } }
  )
  stringify(result)
}

const updateWideReceiver = async () => {
  const result = await WideReceivers.update(
    {
      routeRunning: '99'
    },
    { where: { lastName: 'Hill' } }
  )
  stringify(result)
}

const deleteQuarterback = async () => {
  await Quarterbacks.destroy({ where: { lastName: 'Cousins' } })
}

const deleteRunningback = async () => {
  await Runningbacks.destroy({ where: { lastName: 'Cook' } })
}

const deleteWideReceiver = async () => {
  await WideReceivers.destroy({ where: { lastName: 'Hill' } })
}

const run = async () => {
  try {
    //await findAllQuarterbacks()
    //await findAllRunningbacks()
    //await findAllWideReceivers()
    //await createNewQuarterback()
    //await createNewRunningback()
    //await createNewWideReceiver()
    //await updateQuarterback()
    //await updateRunningback()
    //await updateWideReceiver()
    //await deleteQuarterback()
    //await deleteRunningback()
    //await deleteWideReceiver()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
