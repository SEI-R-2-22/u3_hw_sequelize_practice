const { Pet, Vet, Owner, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

async function main() {
    // console.log(Owner)
    try {

    // Owner

    // find all owners
    const owners = await Owner.findAll()
    stringify(owners)

    // create owner
    const newOwner = await Owner.create({
        firstName: 'Matthew',
        lastName: 'Streeter',
        email: 'matthew@streeter.com',
        petName: 'Fido',
        petBreed: 'Pitbull'
    })
    stringify(newOwner)

    // update owner
    const updatedOwner = await Owner.update({ firstName: 'Matt' }, { where: { firstName: 'Matthew' }})
    const newOwnerName = await Owner.findByPk(21)
    stringify(newOwnerName)

    // delete owner
    const deletedOwner = await Owner.destroy( { where: { lastName: 'Streeter' }})
    stringify(deletedOwner)

    // Pet

    // find all pets
    const pets = await Pet.findAll()
    stringify(pets)

    // create pet
    const newPet = await Pet.create({
        firstName: 'Spot',
        breed: 'Snake',
        age: 14
    })
    stringify(newPet)

    // update pet
    const updatedPet = await Pet.update({ breed: 'Garden Snake' }, { where: { breed: 'Snake' }})
    const newPetName = await Pet.findByPk(12)
    stringify(newPetName)

    // delete pet
    const deletedPet = await Pet.destroy( { where: { breed: 'Garden Snake' }})
    stringify(deletedPet)

    // Vets

    // find all vets
    const vets = await Vet.findAll()
    stringify(vets)

    // create vet
    const newVet = await Vet.create({
        firstName: 'Lucia',
        lastName: 'Jacobs',
        email: 'lucia@imavet.com',
        animalSpecialty: 'Chipmunk'
    })
    stringify(newVet)

    // update vet
    const updatedVet = await Vet.update({ animalSpecialty: 'Squirrel' }, { where: { animalSpecialty: 'Chipmunk' }})
    const newVetSpecialty = await Vet.findByPk(31)
    stringify(newVetSpecialty)

    // delete vet
    const deletedVet = await Vet.destroy( { where: { email: 'lucia@imavet.com' }})
    stringify(deletedVet)

    } catch (error) {
        console.log(error)
    } finally {
        await sequelize.close()
    }
}

main()