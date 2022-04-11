const { user, sequelize } = require("./models");
const { Op } = require("sequelize");

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2));
};

const findAllUsers = async () => {
  const result = await Users.findAll();
  stringify(result);
};

const createUser = async () => {
  const result = await User.create({
    firstName: "Lawrence",
    lastName: "Lloyd",
    email: "loreganlloyd@gmail.com",
    password: "nunya",
  });
};

const updateUser = async () => {
  const result = await User.update(
    { firstName: "Lawrencium" },
    {
      where: {
        firstName: "Lawrence",
      },
    }
  );
};

const deleteUser = async () => {
  const result = await User.destroy({ where: { firstName: "Lawrencium" } });
  stringify(result);
};

async function main() {
  try {
    await findAllUsers();
    await createUser();
    await updateUser();
    await deleteUser();
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
}

main();
