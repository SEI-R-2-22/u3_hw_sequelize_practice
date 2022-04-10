const { Dogs, Cats, Opossums, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
    console.log(JSON.stringify(data, null, 2))
}

const findTheDogs = async () => {
    // const pettingDoggos = await Dogs.findAll()
    // stringify(pettingDoggos)
}

const findTheCats = async () => {
    // const pettingKitties = await Cats.findAll()
    // stringify(pettingKitties)
}

const findTheOpossums = async () => {
    // const pettingOpossums = await Opossums.findAll()
    // stringify(pettingOpossums)
}

const createNewDog = async () => {
    // const newDog = await Dogs.create({
    //     dogName: 'Burt The Dog',
    //     dogAge: '94',
    //     dogBreed: 'corgi'
    // })
    // stringify(newDog)
}

const createNewCat = async () => {
    // const newCat = await Cats.create({
    //     catName: 'Muffin',
    //     catAge: '3',
    //     catBreed: 'orange'
    // })
    // stringify(newCat)
}

const createNewOpossum = async () => {
    // const newOpossum = await Opossums.create({
    //     opossumName: 'Buttercup',
    //     opossumAge: '12',
    //     isOpossum: true
    // })
    // stringify(newOpossum)
}

const updateDog = async () => {
    // const dogdate = await Dogs.update({dogAge: '12'}, {where: {dogAge: '94'}})
    // stringify(dogdate)
}

const updateCat = async () => {
    // const catdate = await Cats.update({catBreed: black}, {where: {catBreed: 'orange'}})
    // stringify(catdate)
}

const updateOpossum = async () => {
    // const opossumdate = await Opossums.update({opossumName: 'Butters'}, {where: {opossumName: 'Buttercup'}})
    // stringify(opossumdate)
}

const deleteDogs = async () => {
    // const dogBeGone = await Dogs.destroy({where: {dogName: 'Burt The Dog'}})
    // stringify(dogBeGone)
}

const deleteCats = async () => {
    // const catsNoMore = await Cats.destroy({where: {catName: 'Muffin'}})
    // stringify(catsNoMore)
}

const deleteOpossums = async () => {
    // const opossumTooPowerful = await Opossums.destroy({where: {opossumName: 'Butters'}})
    // stringify(opossumTooPowerful)
}

const run = async () => {
    try {
        await findTheDogs()
        await findTheCats()
        await findTheOpossums()
        await createNewDog()
        await createNewCat()
        await createNewOpossum()
        await updateDog()
        await updateCat()
        await updateOpossum()
        await deleteDogs()
        await deleteCats()
        await deleteOpossums()
    } catch (error) {
    } finally {
        await sequelize.close()
    }
}

run()