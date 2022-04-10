const { User, Product, Review } = require('./models')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}
