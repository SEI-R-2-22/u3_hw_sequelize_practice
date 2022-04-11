const { Hunt, Hunter, Comment, sequelize } = require("./models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

function stringify(data) {
  console.log(JSON.stringify(data, null, 2));
}
///////////////Hunters//////////////
///////Create///////
const createNewHunters = async () => {
  const createHunter = await Hunter.create({
    firstName: "Ryan",
    lasName: "Garner",
    email: "rpgarner@email.com",
    password: "asdflkjh",
  });
  stringify(createHunter);
};
///////Read/////////
const findAllHunters = async () => {
  const allHunters = await Hunter.findAll();
  stringify(allHunters);
};
////////update//////
const updateHunters = async () => {
  const updatedHunter = await Hunter.update(
    { lasName: "canon" },
    { where: { id: 1 } }
  );
  stringify(updatedHunter);
};

////////delete//////
const deleteHunters = async () => {
  const deleteHunter = await Hunter.destroy({ where: { id: 2 } });
  stringify(deleteHunter);
};
///////////////Hunts//////////////
///////Create///////
const createNewHunts = async () => {
  const createHunt = await Hunt.create({
    type: "Duck hunt",
    location: "Boise Idaho",
    species: "ducks and malards",
    success: "20 ducks",
  });
  stringify(createHunt);
};
///////Read/////////
const findHunts = async () => {
  const allHunts = await Hunt.findAll();
  stringify(allHunts);
};
////////update//////
const updateHunts = async () => {
  const updatedHunt = await Hunt.update(
    { species: "Just Ducks" },
    { where: { id: 1 } }
  );
  stringify(updatedHunt);
};

////////delete//////
const deleteHunts = async () => {
    const deleteHunt = await Hunt.destroy({ where: { id: 2 } });
    stringify(deleteHunt);
};

///////////////Comments//////////////
///////Create///////
const createNewcomments = async () => {
  const createComment = await Comment.create({
    name: "Bob",
    comment: "I never new that there was good duck hunting in Idaho",
    rating: "7",
  });
  stringify(createComment);
};
///////Read/////////
const findAllComments = async () => {
  const allComments = await Comment.findAll();
  stringify(allComments);
};
////////update//////
const updateComments = async () => {
  const updatedComment = await Comment.update(
    { name: "bob dole" },
    { where: { id: 1 } }
  );
  stringify(updatedComment);
};

////////delete//////
const deleteComments = async () => {
    const deleteComment = await Comment.destroy({ where: { id: 2 } });
    stringify(deleteComment);
};

const run = async () => {
  try {
    // await findAllHunters()
    // await findHunts()
    // await findAllComments()
    // await createNewHunters()
    // await createNewHunts()
    // await createNewcomments()
    // await updateHunters()
    // await updateHunts()
    // await updateComments()
    // await deleteHunters()
    // await deleteHunts()
    // await deleteComments
  } catch (error) {
  } finally {
    await sequelize.close();
  }
};

run();
