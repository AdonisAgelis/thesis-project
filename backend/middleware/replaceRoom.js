const db = require('../models');
const Room = db.room;

replaceRoomInDataBase = (req, res, next) => {
  // Room.findOne({ nameOfTemplate: req.body.nameOfTemplate }).exec(
  //   (err, room) => {
  //     if (err) {
  //       console.log('Error my guy');
  //       res.status(500).send({ message: err });
  //       return;
  //     }
  //     if (room) {
  //       console.log('This room already exists');
  //       res.status(400).send({ message: 'This room already exists' });
  //     }
  //     next();
  //   }
  // );
  // if (deezRooms) {
  //   console.log('Rooms here');
  // } else {
  //   console.log('No rooms here');
  // }
  // next();
};

const replaceRoom = { replaceRoomInDataBase };

module.exports = replaceRoom;
