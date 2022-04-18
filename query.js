const { Hair, Scrub, SelfCare, sequelize } = require("./models");
const Sequelize = require("sequelize");
const { user } = require("pg/lib/defaults");
const Op = Sequelize.Op;

function stringify(data) {
  console.log(JSON.stringify(data, null, 2));
}

/////////////////////////////////////////////
const findAllHair = async () => {
  const find = await user.findAll();
  console.log(find);
  stringify(result);
};

const findAllScrub = async () => {
  const find = await user.findAll();
  console.log(find);
  stringify(result);
};

const findAllSelfCare = async () => {
  const find = await user.findAll();
  console.log(find);
  stringify(result);
};

///////////////////////////////////////////////
const createHair = async () => {
  const create = await Hair.create({
    wash: "step 1",
    shampoo: "step 2",
    oils: "step 3",
    ricewater: "step 4",
    rinseout: "step 5",
  });
  console.log(create);
  stringify(result);
};

const createScrub = async () => {
  const create = await Scrub.create({
    loofa: "part 1",
    rinse: "part 2",
    scrub: "part 3",
  });
  console.log(create);
  stringify(result);
};

const createSelfCare = async () => {
  const create = await SelfCare.create({
    oil: "rub",
    lotion: "rub",
    spray: "squeeze",
  });
  console.log(create);
  stringify(result);
};
///////////////////////////////////////////////

const updateHair = async () => {
  const update = await Hair.update(
    { wash: 'do oil first' },
    { where: { wash: 'part 1' } }
  );
  console.log(update);
  stringify(result);
};

const updateScrub = async () => {
  const update = await Scrub.update(
    { loofa: 'try new body wash' },
    { where: { loofa: 'part 1' } }
  );
  console.log(update);
  stringify(result);
};

const updateSelfCare = async () => {
  const update = await SelfCare.update(
    { lotion: 'deep wash rub' },
    { where: { lotion: 'rub' } }
  );
  console.log(update);
  stringify(result);
};

//////////////////////////////////////////////////

const deleteHair = async () => {
  const result = await Hair.destroy({
    where: { wash: 'do oil first' },
  });
};
// console.log(deleted)

const deleteScrub = async () => {
  const result = await Scrub.destroy({
    where: { loofa: 'try new body wash' },
  });
};
// console.log(deleted)

const deleteSelfCare = async () => {
  const result = await SelfCare.destroy({
    where: { lotion: "deep wash rub" },
  });
};
// console.log(deleted)

const run = async () => {
  try {
    await findAllHair();
    await findAllScrub();
    await findAllSelfCare();
    await createHair();
    await createScrub();
    await createSelfCare();
    await updateHair();
    await updateScrub();
    await updateSelfCare();
    await deleteHair();
    await deleteScrub();
    await deleteSelfCare();
  } catch (error) {
  } finally {
    await sequelize.close();
  }
};

run();
