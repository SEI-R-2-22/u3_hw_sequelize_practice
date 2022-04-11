const { User, Product, Review, sequelize } = require('./models')
const review = require('./models/review')
const falso = require('@ngneat/falso')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

/***************************/
/*************User**************/
/***************************/

const createUser = async () => {
  const res = await User.create({
    userName: 'NewUser',
    password: 'random123',
    email: 'test@test.com',
    address: `${falso.randStreetAddress()}, ${falso.randCity()}, ${falso.randState()}, ${falso.randZipCode()}`
  })
  stringify(res)
}

const readUser = async () => {
  const res = await User.findAll()

  stringify(res)
}

const updateUser = async () => {
  const res = await User.update(
    {
      email: 'random@test.com',
      password: 'NotRandom123'
    },
    {
      where: {
        userName: 'NewUser'
      }
    }
  )
  console.log('update successful')
}

const deleteUser = async () => {
  const res = await User.destroy({ where: { userName: 'NewUser' } })
}

/***************************/
/*************Product**************/
/***************************/

const createProduct = async () => {
  const res = await Product.create({
    name: 'newProduct',
    price: 999,
    description: 'Aswesome new stuff',
    brand: falso.randBrand(),
    category: falso.randProductCategory(),
    reviews: falso.randNumber()
  })
  stringify(res)
}
const readProduct = async () => {
  const res = await Product.findAll()
  stringify(res)
}
const updateProduct = async () => {
  const res = await Product.update(
    {
      price: 9.99,
      description: 'ALL much go'
    },
    { where: { name: 'newProduct' } }
  )
  console.log('update sucessful')
}
const deleteProduct = async () => {
  const res = await Product.destroy({ where: { name: 'newProduct' } })
}

/***************************/
/*************Review**************/
/***************************/

const createReview = async () => {
  const res = await Review.create({
    userName: 'MyUser',
    comments: 'this is an aswesome product',
    rating: 5
  })
  stringify(res)
}
const readReview = async () => {
  const res = await Review.findAll()
  stringify(res)
}
const updateReview = async () => {
  const res = await Review.update(
    {
      rating: 4,
      commments: 'product not working after one day'
    },
    { where: { userName: 'MyUser' } }
  )
  console.log('update successful')
}

const deleteReview = async () => {
  const res = await Review.destroy({ where: { rating: 4 } })
}

//uncomment to run code
const main = async () => {
  try {
    // await readUser()
    // await createUser()
    // await updateUser()
    // await deleteUser()
    // await createProduct()
    // await readProduct()
    // await updateProduct()
    // await deleteProduct()
    // await createReview()
    // await readReview()
    // await updateReview()
    // await deleteReview()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
