const { db } = require('../models/room.model');

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
    noSimSquares: req.body.noSimSquares,
  };

  const dataToSim = db
    .collection('rooms')
    .find({
      userId: transferedData.userID,
      nameOfTemplate: transferedData.nameOfTemplate,
    })
    .toArray()
    .then(results => {
      return results;
    })
    .catch(error => console.error.name(error));

  const runSimulationRoom = async () => {
    const [roomData] = await dataToSim;
    console.log(roomData);

    // The items that have been dragged and dropped
    const allPositions = roomData.allPositions;
    console.log(`allPositions: ${allPositions}`);
    // These squares are disabled for simulation
    const noSimSquares = transferedData.noSimSquares.concat(allPositions);
    console.log(`noSimSquares: ${noSimSquares.length}`);

    // These are all 1000 squares of Template
    let allSquares = [];

    for (let i = 0; i < 1000; i++) {
      allSquares.push(i);
    }

    const simSquares = allSquares.filter(
      value => !noSimSquares.includes(value)
    );
    console.log(`simSquares: ${simSquares.length}`);
  };

  runSimulationRoom();
};
