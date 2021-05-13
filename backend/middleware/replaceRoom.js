const db = require('../models');
const Room = db.room;

replaceRoomInDataBase = (req, res, next) => {
  Room.findOne({
    name: req.body.nameOfTemplate,
  }).exec((err, room) => {
    if (err) {
      res.status(400).send({ message: err });
    }

    if (room) {
      res.send({ message: 'There is a room here' });
    }

    next();
  });
};

const replaceRoom = { replaceRoomInDataBase };

module.exports = replaceRoom;
