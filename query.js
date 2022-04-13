const {User, sequelize } = require('./models')

const stringify = (data) => {
    console.log(JSON.stringify(data, null, 2))
  }

  async function main() {
      try{
          ///create
        //   const users = await User.create({
        //       name: 'Sam Kibathi',
        //       address: '123 Real Place, New York, NY',
        //       email: 'sk@gmail.com',
        //       phone: '1234567890'
        //   });
          ///read
        //   const users = await User.findAll();
          ///update
        //   const users = await User.update({email: 'samkibathi@gmail.com'}, {where: {email: 'sk@gmail.com'}})
          ///delete
          const users = await User.destroy({where: {name: 'Sam Kibathi'}})
          stringify(users)
      } catch (error) {
           console.log(error);  
      } finally {
          await sequelize.close()
      }
  }

  main()