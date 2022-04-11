const { car, sequelize } = require("./models");
const { Op } = require("sequelize");
const { up } = require("./migrations/20220408205453-create-cars");

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2));
};

async function main() {
  try {
    // const findAllCars = await car.findAll();
    // const newCar = await car.create({
    //   make: "Toyota",
    //   model: "Rav 4",
    //   color: "Grey",
    //   year: 2023,
    // });

    // const updateCarPaint = await car.update(
    //   { color: "Black" },
    //   { where: { id: 9 } }
    // );

    // const destroyCar = await car.destroy({
    //   where: { id: 9 },
    // });

    stringify(destroyCar);

    // stringify(businesses);
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
}

main();
