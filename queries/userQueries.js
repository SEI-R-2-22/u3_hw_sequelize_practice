// const { Sequelize } = require('sequelize')
// const { Menu, sequelize } = require('./models/menu')
const { User, sequelize } = require('../models')
const { Op } = require('sequelize')

const stringify = (data) => {
    console.log(JSON.stringify(data, null, 2))
}

async function main() {
    try {
        //find all users
        // const users = await User.findAll()
        // stringify(users);

        //create user
        // const jules = await User.create({ first_name: 'Jules', last_name: 'Verne', password: 'JourneyCenterOfEarth', favorite_order_id: 0 });
        // stringify(jules); 
        // or 
        // const user = await User.create({
        //     first_name: 'Captain',
        //     last_name: 'Nemo',
        //     password: '20000Leagues',
        //     favorite_order_id: 0,
        // });

        //update user
        // await User.update({ favorite_order_id: 2 }, {
        //     where: {
        //         first_name: 'Pasquale'
        //     }
        // });

        //delete user
        // await User.destroy({
        //     where: {
        //         last_name: null
        //     }
        // });
    } catch (error) {
        console.log(error)
    } finally {
        await sequelize.close()
    }
}

main()