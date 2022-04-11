const { Characters, Movies, sequelize } = require('./models')
const Sequelize = require('sequelize')
const { Op } = require('sequelize')

function stringify(data) {
    console.log(JSON.stringify(data, null, 2))
}

const findAllCharacters = async () => {
    const character = await Characters.findAll()
    stringify(character)
}

const findAllMovies = async () => {
    const movie = await Movies.findAll()
    stringify(movie)
}

const findAllSongs = async () => {
    const song = await Songs.findAll()
    stringify(song)
}

const createCharacter = async () => {
    const character = await Characters.create(
        {
            name: 'Chihiro',
            gender: 'female',
            age: 10,
            movie: 'Spirited Away',
        }
    )
    stringify(character)
}

const createMovie = async () => {
    const movie = await Movies.create(
        {
            name: 'Spirited Away',
            year: 1997
        }
    )
    stringify(movie)
}

const createSong = async () => {
    const song = await Songs.create(
        {
            name: 'The Bygone Days',
            singer: 'Joe Hisashi',
            movie: 'Porcco Rosso'
        }
    )
    stringify(song)
}


const updateCharacter = async () => {
    const character = await Characters.update(
        { name: 'Sin' },
        { where: { name: 'Chihiro' } }

    )
    stringify(character)
}

const updateMovie = async () => {
    const movie = await Movies.update(
        { year: 2002 },
        { where: { year: 1997 } }
    )
    stringify(movie)
}

const updateSong = async () => {
    const song = await Songs.update(
        { singer: 'instrumental' },
        { where: { singer: 'Joe Hisashi' } }
    )
    stringify(song)
}

const deleteCharacter = async () => {
    const character = await Characters.destroy(
        { where: { name: 'Sin' } }
    )
    stringify(character)
}

const deleteMovie = async () => {
    const movie = await Movies.destroy(
        { where: { year: 2002 } }
    )
    stringify(movie)
}

const deleteSong = async () => {
    const song = await Songs.destroy(
        { where: { movie: 'Porco Rosso' } }
    )
    stringify(song)
}


const run = async () => {
    try {
        await findAllCharacters(),
        await findAllMovies(),
        await findAllSongs(),
        await createCharacter(),
        await createMovie(),
        await createSong(),
        await updateCharacter(),
        await updateMovie(),
        await updateSong(),
        await deleteCharacter(),
        await deleteMovie(),
        await deleteSong()
    } catch (error) {
    } finally {
        await sequelize.close()
    }
}