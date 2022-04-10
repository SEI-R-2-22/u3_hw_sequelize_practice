const { Diesel_Electric, sequelize } = require('./models')
const { Op } = require('sequelize')

async function main() {
    try {
        await Diesel_Electric.create({name: 'qwerty', year: '987', builder: 'poute'})
        await Diesel_Electric.findAll()
        await Diesel_Electric.update({builder: 'cbvmd'}, {where: {name: 'qwerty'}})
        await Diesel_Electric.destroy({where: {name:'qwerty'}})
    }catch (error) {
        console.log(error)
    } finally {
        await sequelize.close()
    }
}

main()