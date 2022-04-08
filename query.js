const { User, Anime, Episode, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllUsers = async () => {
  const result = await User.findAll()
  stringify(result)
}

const findAllAnimes = async () => {
  const result = await Anime.findAll()
  stringify(result)
}

const findAllEpisodes = async () => {
  const result = await Episode.findAll()
  stringify(result)
}

const createUser = async () => {
  const result = await User.create({
    name: 'Canh Vo',
    email: 'canh@is.best',
    username: 'canhvo16',
    password: '1234'
  })
  stringify(result)
}

const createAnime = async () => {
  const result = await Anime.create({
    title: 'Jujutsu Kaisen',
    description: 'Cool stuff',
    seasons: 1,
    totalEpisode: 24,
    rating: 5
  })
  stringify(result)
}

const createEpisode = async () => {
  const result = await Episode.create({
    title: 'Accomplices',
    description: 'The first episode',
    minutes: 24,
    rating: 5
  })
  stringify(result)
}

const updateUserUsername = async () => {
  const result = await User.update(
    { username: 'canhvo1' },
    { where: { username: 'canhvo16' } }
  )
  stringify(result)
}

const updateAnimeSeasons = async () => {
  const result = await Anime.update({ seasons: 2 }, { where: { seasons: 1 } })
  stringify(result)
}

const updateEpisodeRating = async () => {
  const result = await Episode.update({ rating: 4 }, { where: { rating: 5 } })
  stringify(result)
}

const destroyUser = async () => {
  const result = await User.destroy({ where: { name: 'John Doe' } })
  stringify(result)
}

const destroyAnime = async () => {
  const result = await Anime.destroy({ where: { title: 'Jujutsu Kaisen' } })
  stringify(result)
}

const destroyEpisode = async () => {
  const result = await Episode.destroy({ where: { title: 'Accomplices' } })
  stringify(result)
}

const run = async () => {
  try {
    // await findAllUsers()
    // await findAllAnimes()
    // await findAllEpisodes()
    // await createUser()
    // await createAnime()
    // await createEpisode()
    // await updateUserUsername()
    // await updateAnimeSeasons()
    // await updateEpisodeRating()
    // await destroyUser()
    await destroyAnime()
    await destroyEpisode()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
