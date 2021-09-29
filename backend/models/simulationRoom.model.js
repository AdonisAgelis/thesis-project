const mongoose = require('mongoose');

const SimulationRoom = mongoose.model(
  'SimulationRoom',
  new mongoose.Schema({
    userID: String,
    roomID: String,
    nameOfRoom: String,
    arrayOfSimulations: [
      {
        timestamps: [String],
        accessPointsConnected: [Number],
        groupMovement: [Number],
        exhibitsVisited: [Number],
        typeOfVisitors: String,
        numberOfVisitors: Number,
        attractionPower: [Number],
        revisitingPower: [Number],
      },
    ],
    totalAttractionPower: [Number],
    totalRevisitingPower: [Number],
    totalVisitors: Number,
  })
);

module.exports = SimulationRoom;
