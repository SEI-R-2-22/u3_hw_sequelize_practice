const { Horses, Staff, Equipment, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllHorses = async () => {
  try {
    const horses = await Horses.findAll()
    stringify(horses) 
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

const createNewHorse = async () => {
  const newHorse = await Horses.create({
     name: 'Roach', 
     breed: 'Nilfgaardian Thoroughbred',
     jumps: 'Yes'
  })
  stringify(newHorse) 
}

const updateHorses = async () => {
const updatedHorse = await Horses.update({ jumps: 'Yes'}, { where: { jumps: 'In training'}})
   stringify(updatedHorse)
}

const deleteHorses = async () => {
  const deletedHorse = await Horses.destroy({ where: {jumps: 'No'}})
  const horses = await Horses.findAll()
  stringify(horses)
}

// //staff

const findAllStaff = async () => {
  try {
    const staff = await Staff.findAll()
    stringify(staff) 
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

const updateStaff = async () => {
  const updatedStaff = await Staff.update({ lastName: 'Snow'}, { where: { lastName: 'Wayne'}})
     stringify(updatedStaff)
  }

const createNewStaffMember = async () => {
  const newStaffMember = await Staff.create({
     firstName: 'Geralt', 
     lastName: 'Of Rivia',
     email: 'geralt@witchers.com',
     address: 'Kaer Mohern'
  })
  stringify(newStaffMember) 
}

const deleteStaffMember = async () => {
  const deletedMember = await Staff.destroy({ where: {lastName: 'Walker'}})
  const staff = await Staff.findAll()
  stringify(staff)
}

//equipment
const findAllEquipment = async () => {
  try {
    const equipment = await Equipment.findAll()
    stringify(equipment) 
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

const createNewEquipment = async () => {
  const newEquipment = await Equipment.create({
     bitType: 'Pelham', 
     bridleType: 'Double',
     saddleType: 'Dressage'
  })
  stringify(newEquipment) 
}

const updateEquipment = async () => {
  const updatedEquipment = await Equipment.update({ saddleType: 'Endurance'}, { where: { saddleType: 'Western'}})
     stringify(updatedEquipment)
  }

const deleteEquipment = async () => {
    const deletedEquipment = await Equipment.destroy({ where: {saddleType: 'Dressage'}})
    const equipment = await Equipment.findAll()
    stringify(equipment)
  }
  


const run = async () => {
  try {
   // await findAllHorses()
   // await findAllEquipment()
   // await findAllStaff()
  // await createNewHorse()
  // await createNewStaffMember() 
  // await updateHorses()
  // await deleteHorses()
  //  await createNewEquipment()
 } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()