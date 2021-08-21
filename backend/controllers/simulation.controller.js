const config = require('../config/auth.config');
const { db } = require('../models/user.model');
const User = db.user;
const Role = db.role;
const Room = db.room;


/*Dexomaste apo frontend (axios post) to room ID, to idos tis omadas twn anthrwpwn kai ton arithmo tous
Pairnoume apo mongo database (me vasi to id tou dwmatioy) ta xaraktiristika tou 
Kai eimaste etoimoi gia simulation
Ilopioume thn logiki tou simulation
Apothikeuoume ta nea dedomena se pinaka
Stelnoume sto frontend ton pinaka
Molis teliosume ayto to kommati tote to sindeoume me to front*/

exports.simulation = (req, res) => {
  const transferedData = {
    typeOfGroup: req.body.typeOfGroup,
    numberOfPeopleInGroup: req.body.numberOfPeopleInGroup,
    userID: req.body.userID,
    nameOfTemplate: req.body.nameOfTemplate,
  };
  console.log(transferedData)
  const simulationRoom = ()=> {
    db.collection('rooms')
    .find({ userId: transferedData.userID, nameOfTemplate:transferedData.nameOfTemplate })
    .toArray()
    .then(results => {
      console.log(results);
      
    })
    .catch(error => console.error.name(error));
  }

  simulationRoom();
  
  // const printSimulationRoom = async () => {
  //   const a = await simulationRoom;
  //   console.log(a);
  // }  

  
};
