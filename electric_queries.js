const { Electric, sequelize } = require('./models')
const { Op } = require('sequelize')

async function main() {
    try {
        await Electric.create ({name: 'sdfh', year: '456', builder: 'shdfhye'})
        await Electric.findAll()
        await Electric.update({year: '4714'}, {where: {name:'sdfh'}})
        await Electric.destroy({where: {name: 'sdfh'}})
    }catch (error) {
        console.log(error)
    } finally {
        await sequelize.close()
    }
}

main()