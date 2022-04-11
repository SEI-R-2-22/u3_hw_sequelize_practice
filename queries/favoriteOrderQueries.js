const { FavoriteOrder, sequelize } = require('../models')
const { Op } = require('sequelize')

const stringify = (data) => {
    console.log(JSON.stringify(data, null, 2))
}

async function main() {
    try {
        // find all fav orders
        // const orders = await FavoriteOrder.findAll({
        //     where: {
        //         user_id: [1, 5]
        //     }
        // })
        // stringify(orders);

        // create fav order
        // const order = await FavoriteOrder.create({
        //     item_id: 8,
        //     user_id: 9
        // });

        // update fav order
        // await FavoriteOrder.update({ item_id: 4 }, {
        //     where: {
        //         user_id: 9
        //     }
        // });

        // delete fav order
        // await FavoriteOrder.destroy({
        //     where: {
        //         user_id: {
        //             [Op.or]: [2, 5]
        //         }
        //     }
        // });

    } catch (error) {
        console.log(error)
    } finally {
        await sequelize.close()
    }
}

main()