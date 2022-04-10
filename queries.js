const {Coach, Student, SessionClass, sequelize} = require('./models');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');

const stringify = (data) => {
  console.log(JSON.stringify(data,null,2));
}

// QUERIES:

  // STUDENTS
  // Create: new student
  const createNewStudent = async () => {  
    const newStudent = await Student.create({
      firstname: 'Bill',
      lastname: 'Nye',
      pronoun: 'he/him',
      age: 55,
      email: 'bill@science.org',
      address: '123 Bill St, Science, WA',
      level: 5,
      payment_info: 'none'
    });
  }
  // Read: * students
  const findAllStudents = async () => {
    const allStudents = await Student.findAll();
    console.log(allStudents.length);
    stringify(allStudents);
  }
  // Read: * students WHERE lastname LIKE 'N%' (starts with 'N')
  const findStudentsWhereLastStartsWith = async (char) => {
    const lastNames = await Student.findAll(
      // {attributes: ['lastname','firstname']},
      {where: {lastname: {[Op.like]: `${char}%`}}}
    )
    stringify(lastNames.length,lastNames);
  }
    // Update: 
  const updateBillNye = async () => {
    const scienceGuy = await Student.update(
      {lastname: 'Science-Guy'},
      {where: {
        firstname: 'Bill', lastname: 'Nye'
      }}

    );
    stringify(scienceGuy);
  }
  // Delete: by ID
  const destroyById = async (id_num) => {
    const seekAndDestroy = await Student.destroy(
      {where: {id: id_num}}
    )
  }

  //COACHES
  // Create: new coach
  const createNewCoach = async () => {  
    const newStudent = await Student.create({
      firstname: 'Bill',
      lastname: 'Nye',
      pronoun: 'he/him',
      age: 55,
      email: 'bill@science.org',
      address: '123 Bill St, Science, WA',
      level: 5,
      payment_info: 'none'
    });
  }



async function studentQueries() {
  try {
    // await createNewStudent();
    // await findAllStudents();
    // await updateBillNye();
    // await findStudentsWhereLastStartsWith('S');
    await destroyById(13);

  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
}

console.log(studentQueries());