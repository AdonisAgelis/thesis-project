const config = require('../config/auth.config');
const db = require('../models');
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

  db.collection('rooms')
    .find({ userId: req.body.transferedData.userID })
    .toArray()
    .then(results => {
      console.log(results);
      // res.status(200).send(results);
    })
    .catch(error => console.error.name(error));
};
