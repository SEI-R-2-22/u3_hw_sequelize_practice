const { Item, sequelize } = require('../models')
const { Op } = require('sequelize')

const stringify = (data) => {
    console.log(JSON.stringify(data, null, 2))
}

async function main() {
    try {
        // find specified item
        // const items = await Item.findAll()
        // stringify(items);

        // create item
        // const item = await Item.create({
        //     name: 'White Sauce Pizza', menu_id: 2
        // });

        // update item
        // await Item.update({ name: 'Cookie Pie' }, {
        //     where: {
        //         id: 10
        //     }
        // });

        // delete item
        // await Item.destroy({
        //     where: sequelize.where(sequelize.fn('char_length', sequelize.col('name')), 10)
        // });

    } catch (error) {
        console.log(error)
    } finally {
        await sequelize.close()
    }
}

main()