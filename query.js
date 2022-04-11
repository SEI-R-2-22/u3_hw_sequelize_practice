const { User, Booking, Properties, sequelize } = require('./models')
const Sequelize = require('sequelize')

function stringify(data) {
    console.log(JSON.stringify(data, null, 2))
  }

  const findAllUsers = async () => {
    const users = await User.findAll();
    stringify(users)
  }

  const findAllBookings = async () => {
    const bookings = await Booking.findAll();
    stringify(bookings)
}

const findAllProperties = async () => {
    const properties = await Properties.findAll();
    stringify(properties)
}

const createUser = async () => {
    const newUser = await User.create({firstName: 'Dylan', lastName: 'Marvel', email: 'dy@dy.com', password: '1234'})
    stringify(newUser)
}

const createBooking = async () => {
    const newBooking = await Booking.create({orderNumber: 4, userId: 8, propertyId: 7, price: 1800})
    stringify(newBooking)
}

const createProperties = async () => {
    const newProperties = await Properties.create({occupancy: 2, address: 'Example St.', bedrooms: 1, bathrooms: 1, squareFeet: 500})
    stringify(newProperties)
}

const updateUser = async () => {
    const updatedUser = await User.update({email: 'dylan.marvel@gmail.com'}, {where:{email: 'dy@dy.com'}})
    stringify(updatedUser)
}

const updateBooking = async () => {
    const updatedBooking = await Booking.update({userId: 9}, {where:{userId: 8}})
    stringify(updatedBooking)
}

const updateProperties = async () => {
    const updatedProperties = await Properties.update({bedrooms: 2}, {where:{bedrooms:1}})
    stringify(updatedProperties)
}

const deleteUser = async () => {
    const deletedUser = await User.destroy({where:{firstName: 'Dylan'}})
    stringify(deletedUser)
}

const deleteBooking = async () => {
    const deletedBooking = await Booking.destroy({where:{userId: 8}})
    stringify(deletedBooking)
}

const deleteProperties = async () => {
    const deletedProperties = await Properties.destroy({where:{ bedrooms: 1}})
    stringify(deletedProperties)
}

const run = async () => {
    try {
        // Create:
        // await createUser()
        // await createBooking()
        // await createProperties()

        // Read:
        // await findAllUsers()
        // await findAllBookings()
        // await findAllProperties()

        // Update:
        // await updateUser()
        // await updateBooking()
        // await updateProperties()

        // Delete:
        // await deleteUser()
        // await deleteBooking()
        // await deleteProperties()

    } catch (error) {
        throw error
    } finally {
        await sequelize.close()
    }
}

run()