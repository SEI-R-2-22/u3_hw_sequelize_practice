const { Steam, sequelize} = require('./models')
const { Op } = require('sequelize')

async function main() {
    try {
        await Steam.create({name: 'sdhfb', year: '1235', wheel: '2-2-2', builder: 'sdhdfg'})
        await Steam.findAll()
        await Steam.update({name: 'asff'}, {where: {name: 'sdhfb'}})
        await Steam.destroy({where: {name: 'asff'}})
    } catch (error) {
        console.log(error)
    } finally {
        await sequelize.close()
    }
}

main()