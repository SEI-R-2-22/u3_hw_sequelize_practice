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
      {
        attributes: ['lastname','firstname'],
        where: {lastname: {[Op.like]: `${char}%`}}
      }
    )
    return lastNames;
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
  const createNewCoach = async (fname,lname,pro,em,img) => {  
    const newCoach = await Coach.create({
      firstname: fname,
      lastname: lname,
      pronoun: pro,
      email: em,
      profileimg_url: img
    });
    return newCoach;
  }
  // Read: all coaches
  const findAllCoaches = async () => {
    const allCoaches = await Coach.findAll();
    // return stringify(allCoaches);
  }
  // Read: all coaches where firstname starts with T
  const findAllFirstNameT = async () => {
    const Tcoaches = await Coach.findAll(
      {
        attributes: ['firstname', 'lastname'],
        where: {firstname: {[Op.startsWith]: 'T'}}
      }
    )
    return Tcoaches;
  }
  // Read: all coaches with more than n classes (JOIN)
    const classesByCoachId = async (n) => {
      const ppl = await SessionClass.findAll(
        {include: [
          {
            model: Coach,
            where: {id: n}
          }
        ]}
      );
      return ppl;
    }
  // Update: all coaches where id=#
  const updateCoachNameById = async (inputid, first, last) => {
    const entry = await Coach.update(
      {firstname: first, lastname: last},
      {where: {id: inputid} }
    )
    return entry;
  }
  // Delete: coach by ID
  const deleteCoachById = async (inputid) => {
    const bye = await Coach.destroy(
      {
        where: {id: inputid}
      }
    );
  }

// SESSION_CLASSES
// Create new session class:
const createNewClass = async () => {  
  const newClass = await SessionClass.create({
    name: 'Handbalancing 101',
    description: 'Everything looks better upside down.',
    day: 'Thurday',
    start_time: '17:45:00',
    length: 75,
    youth: false,
    price: 30,
    coach_pay_type: 'Lead',
    coach_id: 7
  });
  return newClass;
}
//Read: all classes
const findAllClasses = async () => {
  const allClasses = await SessionClass.findAll();
  return allClasses;
}
//Read: all adult classes
const findAdultClasses = async () => {
  const adultClasses = await SessionClass.findAll(
    {
      where: {youth: false}
    }
  );
  return adultClasses;
}
//Read: all youth classes
const findYouthClasses = async () => {
  const youthClasses = await SessionClass.findAll(
    {
      where: {youth: true}
    }
  );
  return youthClasses;
}
//Update youth class time = 60 mins
const upateYouthClassLength = async (n) => {
  const update = await SessionClass.update(
    {length: n},
    {where: {youth: true}}
  )
  return update;
} 
//Update adult class time = 60 mins
const upateAdultClassLength = async (n) => {
  const update = await SessionClass.update(
    {length: n},
    {where: {youth: false}}
  )
  return update;
} 

async function allTheQueries() {
  try {
  // STUDENTS
    // await createNewStudent();
    // await findAllStudents();
    // await updateBillNye();
    // await findStudentsWhereLastStartsWith('S');
    // await destroyById(13);
  // COACHES
    // await createNewCoach('Alex','Jackson','he/him','alex@esh.com','www.what.com/img');
    // await createNewCoach('Test','Coach','they/them','test@esh.com','www.test.com/img');
    // await findAllCoaches();
    // await findAllFirstNameT();
    // await updateCoachNameById(8,'Alexis','Hedrick');
    // await deleteCoachById(9); 
  // SESSION CLASSES
    // await createNewClass();
    // await findAllClasses();
    // await findAdultClasses()
    // await upateYouthClassLength(60)
    // await upateAdultClassLength(70)
    
    stringify(
      await classesByCoachId(1)
      )
      
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
}

allTheQueries();