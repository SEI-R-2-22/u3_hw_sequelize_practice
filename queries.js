const { Album, Artist, Track, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllArtists = async () => {
  const result = await Artist.findAll()
  stringify(result)
}

const findAllAlbums = async () => {
  const result = await Album.findAll()
  stringify(result)
}

const findAllTracks = async () => {
  const result = await Track.findAll()
  stringify(result)
}

const findArtistByName = async (name) => {
  const result = await Artist.findAll({ where: { name: name } })
  stringify(result)
}

const findAlbumByName = async (name) => {
  const result = await Album.findAll({ where: { albumName: name } })
  stringify(result)
}

const findAlbumByArtist = async (name) => {
  const result = await Album.findAll({ where: { albumArtist: name } })
  stringify(result)
}

const findTrackByName = async (name) => {
  const result = await Track.findAll({ where: { trackName: name } })
  stringify(result)
}

const findTracksByAlbum = async (name) => {
  const result = await Track.findAll({ where: { albumName: name } })
  stringify(result)
}

const findTracksByArtist = async (name) => {
  const result = await Track.findAll({ where: { artistName: name } })
  stringify(result)
}

const createNewArtist = async (name) => {
  const result = await Artist.create({
    name: name
  })
  stringify(result)
}

const createNewAlbum = async (name, artist) => {
  const result = await Album.create({
    albumName: name,
    albumArtist: artist
  })
  stringify(result)
}

const createNewTrack = async (name, album, artist) => {
  const result = await Track.create({
    trackName: name,
    albumName: album,
    artistName: artist
  })
  stringify(result)
}

const destroyArtist = async (name) => {
  const result = await Artist.destroy({ where: { name: name } })
  stringify(result)
}

const destroyAlbum = async (name) => {
  const result = await Album.destroy({ where: { albumName: name } })
  stringify(result)
}

const destroyTrack = async (name) => {
  const result = await Track.destroy({ where: { trackName: name } })
  stringify(result)
}

const updateArtist = async (newName, oldName) => {
  const result = await Artist.update(
    { name: newName },
    { where: { name: oldName } }
  )
  stringify(result)
}

const updateAlbumName = async (newName, oldName) => {
  const result = await Album.update(
    { albumName: newName },
    { where: { albumName: oldName } }
  )
  stringify(result)
}

// const updateAlbumArtist = async (newName, oldName) => {
//   const result = await Album.update(
//     { albumArtist: newName },
//     { where: {albumName: {[Op.like]: {'%`${album}`'}}},{ albumArtist: oldName }}
//   )
//   stringify(result)
// }

const updateTrackName = async (newName, oldName) => {
  const result = await Track.update(
    { trackName: newName },
    { where: { trackName: oldName } }
  )
  stringify(result)
}

// const updateTrackAlbum = async (newName, oldName) => {
//   const result = await Track.update(
//     { albumName: newName },
//     { where: { albumName: oldName }}
//   )
//   stringify(result)
// }

// const updateTrackArtist = async (newName, oldName) => {
//   const result = await Track.update(
//     { artistName: newName },
//     { where: { artistName: oldName }}
//   )
//   stringify(result)
// }

const run = async () => {
  try {
    // await findAllArtists()
    // await findAllAlbums()
    // await findAllTracks()
    // await findArtistByName('Justice Silverbeard')
    // await findAlbumByName('Fraudulent Decades')
    // await findAlbumByArtist('RX Bandits')
    // await findTrackByName('Come Home')
    // await findTracksByAlbum('Change')
    // await findTracksByArtist('Dismemberment Plan')
    // await createNewArtist('Hot Snakes')
    // await createNewAlbum('Audit in Progress', 'Hot Snakes')
    // await createNewTrack('Braintrust', 'Audit in Progress', 'Hot Snakes')
    // await destroyArtist('Hot Snakes')
    // await destroyAlbum('Audit in Progress')
    // await destroyTrack('Braintrust')
    // await updateArtist('Silverbeard', 'Justice Silverbeard')
    // await updateAlbumName('Fake For Years', 'Fraudulent Decades')
    await updateTrackName('We Are', 'If We Are')
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
