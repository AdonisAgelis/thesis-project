const mongoose = require("mongoose");

const Room = mongoose.model(
  "Room",
  new mongoose.Schema({
    // name: String,
    entrance: Number,
    // exit: Number,
    // accessPoint: [Number],
    // exhibit: [Number],
    // wall: [Number],
    // positionThatWillUndo: Number,
    // counterAccessPoint: Number,
    // counterExhibit: Number,
    // counterWall: Number,
    // counterAllPositions: Number,
    // allPositions: [Number],
    // entranceBadge: Number,
    // exitBadge: Number,
    // accessPointBadge: Number,
    // exhibitBadge: Number,
    // height: Number,
    // width: Number,
    // isResized: Boolean,
    // dropdownSelectionsReducer: Number,
  })
);

module.exports = Room;
