const { Car, Driver, Dealership, sequelize } = require("./models");
const { Op } = require("sequelize");
const { up } = require("./migrations/20220408205453-create-Cars");

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2));
};

async function main() {
  try {
    // const findAllCars = await Car.findAll();

    // const newCar = await Car.create({
    //   make: "Toyota",
    //   model: "Rav 4",
    //   color: "Grey",
    //   year: 2023,
    // });

    // const updateCarPaint = await Car.update(
    //   { color: "Black" },
    //   { where: { id: 9 } }
    // );

    // const destroyCar = await Car.destroy({
    //   where: { id: 9 },
    // });

    // const findAllDrivers = await Driver.findAll();

    // const findAllDealerships = await Dealership.findAll();

    stringify(destroyCar);

    // stringify(businesses);
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
}

main();
