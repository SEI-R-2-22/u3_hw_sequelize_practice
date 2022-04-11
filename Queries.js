const { Sellers, homes, buyers, sequelize} = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

async function main() {
  try {
    const funct = await Sellers.findAll()
    // const funct = await Sellers.create({
    //   name: 'Mike Oxlong',
    // bedrooms: 'Six',
    // lotSize: 8000,
    // squareFeet: 3000,
    // location: 'San Antonio, TX'
    // })
    // const funct = await Sellers.update({bedrooms: 'Seven'}, {
    //   where: {
    //     bedrooms: 'Six'
    //   }
    // })
    // const funct = await Sellers.destroy({where: {id: '1'}});
    stringify(funct)
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()

async function second() {
    try {
      const funct = await homes.findAll()
      // const funct = await homes.create({
      //   bedrooms: 'Five',
        //   lotSize: 7000,
        //   squareFeet: 2086,
        //   location: 'San Francisco, CA'
      // })
      // const funct = await homes.update({squareFeet: 1790}, {
      //   where: {
      //     squareFeet: 1786
      //   }
      // })
      // const funct = await homes.destroy({where: {id: '1'}});
      stringify(funct)
    } catch (error) {
      console.log(error)
    } finally {
      await sequelize.close()
    }
  }
  
  second()

  async function third() {
    try {
      const funct = await buyers.findAll()
      // const funct = await buyers.create({
      //   name: 'Doe Mane',
        //   age: 32,
        //   location: 'Annapolis, MD',
        //   cashLimit: 15000,
      // })
      // const funct = await buyers.update({name: 'Jane Sazowski'}, {
      //   where: {
      //     name: 'Jane Doe'
      //   }
      // })
      // const funct = await buyers.destroy({where: {id: '1'}});
      stringify(funct)
    } catch (error) {
      console.log(error)
    } finally {
      await sequelize.close()
    }
  }
  
  third()