const { Building, Apartment, Tenant, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const stringify = (data) => {
    console.log(JSON.stringify(data, null, 2))
}

const findAllBuildings = async () => {
    const building = await Building.findAll()
    stringify(building)
}

const createNewBuilding = async () => {
    const newBuilding = await Building.create({
        name:'3950 LSD',
        address: '3950 N Lake Shore Dr',
        floors: 23,
        units: 610,
        parking: 200,
        code: '3950'
    })
    stringify(newBuilding)
}

const updateBuilding = async () => {
    const building = await Building.update(
        { parking: 150 },
        { where: { parking: 200 }}
    )
    stringify(building)
}

const deleteBuilding = async () => {
    const building = await Building.destroy(
        { where: { name: '3950 LSD'}}
    )
    stringify(building)
}

const findAllApartments = async () => {
    const apartment = await Apartment.findAll()
    stringify(apartment)
}

const createNewApartment = async () => {
    const newApartment = await Apartment.create({
        name: 'Unit 1',
        bed: 2,
        bath: 1,
        sqft: 1000,
        rent: 2000,
        status: 'Leased',
        code: '1',
        buildingCode: 'HOY'
    })
    stringify(newApartment)
}

const updateApartment = async () => {
    const apartment = await Apartment.update(
        { sqft: 980 },
        { where: { code: '1', buildingCode: 'HOY' } }
    )
    stringify(apartment)
}

const deleteApartment = async () => {
    const apartment = await Apartment.destroy(
        { where: { code: '1', buildingCode: 'HOY' } }
    )
    stringify(apartment)
}

const findAllTenants = async () => {
    const tenant = await Tenant.findAll()
    stringify(tenant)
}

const createNewTenant = async () => {
    const newTenant = await Tenant.create({
        firstName: 'Jill',
        lastName: 'Inhills',
        phone: '773202luna',
        email: 'jillhills@email.com',
        buildingCode: 'AUG',
        apartmentCode: '2'
    })
    stringify(newTenant)
}

const updateTenant = async () => {
    const tenant = await Tenant.update(
        { lastName: 'Indahills' },
        { where: { lastName: 'Inhills'} }
    )
    stringify(tenant)
}

const deleteTenant = async () => {
    const tenant = await Tenant.destroy(
        { where: { firstName: 'Jill' } }
    )
    stringify(tenant)
}

const run = async () => {
    try {
    // await findAllBuildings(),
    // await createNewBuilding(),
    // await updateBuilding(),
    // await deleteBuilding(),
    // await findAllApartments()
    // await createNewApartment(),
    // await updateApartment(),
    // await deleteApartment(),
    // await findAllTenants()
    // await createNewTenant(),
    // await updateTenant(),
    // await deleteTenant()

    } catch (error) {
    } finally{
        await sequelize.close()
    }
}

run()