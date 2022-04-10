const { Member, Drill, Warmdown, sequelize} = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
    console.log(JSON.stringify(data, null, 2))
}


/////////////////// READ ///////////////////
const findAllMembers = async () => {
    const members = await Member.findAll()
    console.log(members)
    stringify(result)
}

const findAllDrills = async () => {
    const drills = await Drill.findAll()
    console.log(drills)
    stringify(result)
}

const findAllWarmdown = async () => {
    const warmdowns = await Warmdown.findAll()
    console.log(warmdowns)
    stringify(result)
}


/////////////////// CREATE  ///////////////////
const createMember= async () => {
    const member = await Member.create(
        // {
        //     firstname: 'Mike',
        //     lastname: 'Turck',
        //     age: 31,
        //     position: 'small forward'
        // },
        {
            firstname: 'Ali',
            lastname: 'Checkof',
            age: 31,
            position: 'bench warmer'
        },
    )
    console.log(member)
    stringify(result)
}

const createDrill = async () => {
    const drill = await Drill.create(
        {
            name: 'suicides',
            length: 45,
            difficulty: 7
        }
    )
    console.log(drill)
    stringify(result)
}

const createWarmdown = async () => {
    const warmdown = await Warmdown.create(
        {
            name: 'stretching',
            length: 20
        }
    )
    console.log(warmdown)
    stringify(result)
}


/////////////////// UPDATE ///////////////////
const updateMember = async () => {
    const update = await Member.update(
        {position: 'point guard'},
        {where: {lastname: 'Iapoce'}}
    )
    console.log(update)
    stringify(result)
}

const updateDrill = async () => {
    const update = await Drill.update(
        { length: 100 },
        { where:{ id: 1 } }
    )
    console.log(update)
    stringify(result)
}

const updateWarmdown = async () => {
    const update = await Warmdown.update(
        { name: 'Static Stretching' },
        { where:{ id: 2 } }
    )
    console.log(update)
    stringify(result)
}


/////////////////// DESTROY ///////////////////
const destroyMember = async () => {
    const result = await Member.destroy(
        { where: { id:10 }});
    console.log(`deleted row(s): ${count}`);
    stringify(result)
}

const deleteDrill = async () => {
    const result = await Drill.destroy(
        { where: { id: 1 }});
    console.log(`deleted row(s): ${count}`);
    stringify(result)
}

const deleteWarmdown = async () => {
    const result = await Warmdown.destroy(
        { where: { name: 'yoga' }});
    console.log(`deleted row(s): ${count}`);
    stringify(result)
}






  const run = async () => {
    try {
    //   await findAllMembers()
      await findAllDrills()
    //   await findAllWarmdown()
    //   await createMember()
    //   await createDrill()
    //   await createWarmdown()
    //   await updateMember()
    //   await updateDrill()
    //   await updateWarmdown()
    //   await destroyMember()
    //   await deleteDrill()
    //   await deleteWarmdown()
    } catch (error) {
    } finally {
      await sequelize.close()
    }
  }
  
  run()