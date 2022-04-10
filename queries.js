const { Artist, Album, Song, sequelize } = require('./models')
const Sequelize = require('sequelize')
const song = require('./models/song')
const Op = Sequelize.Op

// Create for Artist
const  createArtist = async () => {
    await Artist.create(
        {
            artist_band: 'EdSheeran'
        }
    )
}

// Read for Artist
const findAllArtist = async () => {
    const ar = await Artist.findAll()
    console.log(ar)
}

// Update for Artist
const updateArtist = async () => {
    await Artist.update(
        {artist_band: 'Ed Sheeran'}, {where: {artist_band: 'EdSheeran'}}
    )
}

// Delete for Artist
const deleteArtist = async () => {
    await Artist.destroy(
        {where: {artist_band: 'Ed Sheeran'}}
    )
}


// Create for Album
const createAlbum = async () => {
    await Album.create(
        {
            artist_band_id: 3,
            title: '=',
            year: 2021,
            label: 'Asylum - Atlantic'
        }
    )
}

// Read for Album
const findAllAlbumByArtist = async () => {
    const al = await Album.findAll(
        {include: [{
            model: Artist, required: true
        }]}
    )
    console.log(JSON.stringify(al, null, 2))
}

// Update for Album
const updateAlbum = async () => {
    await Album.update(
        { title: '+', year: 2011}, {where: {title: '='}}
    )
}

// Delete for Album
const deleteAlbum = async () => {
    await Album.destroy(
        {where: {title: 'Sob Rock'}}
    )
}

// Create for Song
const addSong = async () => {
    await Song.create(
        {
            artist_band_id: '1',
            song: 'Lego House',
            time: '3:05',
            composer: 'Ed Sheeran - Jake Gosling - Chris Leonard',
        }
    )
}

// Read for Song
const findAllSongsByArtist = async () => {
    const al = await Song.findAll(
        {include: [{
            model: Artist, required: true
        }]}
    )
    console.log(JSON.stringify(al, null, 2))
}

// Update for Song
const updateArtistInSong = async () => {
    await Song.update(
        {artist_band_id: '3'}, {where: {song: 'Lego House'}}
    )
}

// Delete for Song
const deleteSong = async () => {
    await Song.destroy(
        {where: {titel: '22'}}
    )
}

const run = async () => {
    try {
        await createArtist()
        await updateArtist()
        await findAllArtist()
        await createAlbum()
        await updateAlbum()
        await findAllAlbumByArtist()
        await addSong()
        await updateArtistInSong()
        await findAllSongsByArtist()
        await deleteArtist()
        await deleteAlbum()
        await deleteSong()
    } catch (error) {
    } finally {
      await sequelize.close()
    }
  }

  run()