const { Band, Songs, Albums, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

// BELOW ARE THE CREATE FUNCTIONS FOR THE BEATLES DB
const createSong = async () => {
     const newSong = await Songs.create({name: 'Norwegian Wood', songNum: 33})
    console.log(newSong)
}

const createAlbum = async () => {
    const newAlbum = await Albums.create({name: 'Rubber Soul', songs: 12})
    console.log(newAlbum)
}

const createBand = async () => {
    const newBand = await Band.create({name: 'Me', title: 'idk'})
    console.log(newSong)
}

// BELOW ARE THE READ FUNCTIONS FOR THE BEATLES DB
const findAllSongs = async () => {
    const songs = await Songs.findAll()
    stringify(songs)
    console.log(songs)
}

const findAllAlbums = async () => {
    const albums = await albums.findAll()
    stringify(albums)
    console.log(albums)
}

const findAllBand = async () => {
    const band = await band.findAll()
    stringify(band)
    console.log(band)
}

// BELOW ARE THE UPDATE FUNCTIONS FOR THE BEATLES DB
const updateSong = async () => {
  const update = await Songs.update(
    { name: 'HELP' },
    { where: {name: 'Norwegian Wood'} }
  )
  console.log(update)
}

const updateAlbum = async () => {
  const update = await Albums.update(
    { name: 'The White Album' },
    { where: {name: 'the White Album'} }
  )
  console.log(update)
}

const updateBand = async () => {
  const update = await Band.update(
    { name: 'Mark Harmon' },
    { where: {name: 'Me'} }
  )
  console.log(update)
}

// BELOW ARE THE DELETE FUNCTIONS FOR THE BEATLES DB
const deleteSong = async () => {
  const rem = await Songs.destroy(
    { where: {name: 'HELP'}}
  )
  console.log(rem)
}

const deleteAlbum = async () => {
  const rem = await Albums.destroy(
    { where: {name: 'Abbey Road'}}
  )
  console.log(rem)
}

const deleteBand = async () => {
  const rem = await Band.destroy(
    { where: {name: 'Mark Harmon'}}
  )
  console.log(rem)
}

const run = async () => {
    try {
        await deleteSong()
        await deleteAlbum()
        await deleteBand()
        await updateBand()
        await updateAlbum()
        await updateSong()
        await createSong()
        await createAlbum()
        await createBand()
        await findAllSongs()
        await findAllAlbums()
        await findAllBand()
    } catch (error) {
    } finally {
      await sequelize.close()
    }
}
  
run()