const { db } = require('../models');
const Room = db.room;

replaceRoomInDataBase = (req, res, next) => {
  const deezRooms = db.collection('rooms').find({ roomId: req.body._id });

  if (deezRooms) {
    console.log('Rooms here');
  } else {
    console.log('No rooms here');
  }

  next();
};

const replaceRoom = { replaceRoomInDataBase };

module.exports = replaceRoom;
