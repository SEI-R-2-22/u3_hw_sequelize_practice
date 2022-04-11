const { User, Truck, Review } = require('./models')

const stringify = (data) => {
    console.log(JSON.stringify(data, null, 2))
}

const findAllUsers = async () => {
    const result = await User.findAll()
    stringify(result)
}

const updateUser = async (data) => {
    const result = await User.update(
        data,
        { where: { firstName: 'Nghiem'}}
    )
    stringify(result)
}

const createUser = async (data) => {
    const result = await User.create(
        data
    )
    stringify(result)
}

const deleteUser = async (id) => {
    const result = await User.destroy({ where: { id : id}})
    stringify(result)
}

const findAllTrucks = async () => {
    const result = await Truck.findAll()
    stringify(result)
}

const updateTruck = async (data) => {
    const result = await Truck.update(
        data,
        { where: { name: 'San Antonio'}}
    )
    stringify(result)
}

const createTruck = async (data) => {
    const result = await Truck.create(
        data
    )
    stringify(result)
}

const deleteTruck = async (id) => {
    const result = await Truck.destroy({ where: { id : id}})
    stringify(result)
}

const findAllReviews = async () => {
    const result = await Review.findAll()
    stringify(result)
}

const updateReview= async (data) => {
    const result = await Review.update(
        data,
        { where: { name: 'Nick'}}
    )
    stringify(result)
}

const createReview = async (data) => {
    const result = await Review.create(
        data
    )
    stringify(result)
}

const deleteReview= async (id) => {
    const result = await Review.destroy({ where: { id : id}})
    stringify(result)
}

const run = async () => {
    try {
        // await findAllUsers()
        // await updateUser({firstName: 'Nick'})
        // await createUser({
        //     firstName: "Evan",
        //     lastname: "Hoang",
        //     email: 'evan@gmail.com',
        //     password: 'evan'
        // })
        // await deleteUser(1)
        
        // await findAllTrucks()
        // await updateTruck({name: 'Houston'})
        // await createTruck({
        //     name: "USA",
        //     openHour: "!0Am - 10PM",
        //     location: 'South',
        //     rating: 5
        // })
        // await deleteTruck(2)

        // await findAllReviews()
        // await updateReview({name: 'Houston'})
        await createReview({
            name: "Evan",
            comment: "Great!",
            rating: 5
        })
        // await deleteReview(2)
    } catch (error) {
        throw error
    }
}

run()