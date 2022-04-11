const { Menu, sequelize } = require('../models')
const { Op } = require('sequelize')

const stringify = (data) => {
    console.log(JSON.stringify(data, null, 2))
}

async function main() {
    try {
        // find all menus
        // const menus = await Menu.findAll()
        // stringify(menus)

        // creat menu
        // const salads = await Menu.create({
        //     name: 'Salads'
        // });

        // update menu
        // await Menu.update({ name: 'Desserts'}, {
        //     where: {
        //         name: 'Desert'
        //     }
        // });

        // delete menu
        // await Menu.destroy({
        //     truncate: true
        // });

    } catch (error) {
        console.log(error)
    } finally {
        await sequelize.close()
    }
}

main()