const db = require('../models');
const Room = db.room;

replaceRoomInDataBase = (req, res, next) => {
  const postedData = {
    userId: req.body.roomData.userId,
    entrance: req.body.roomData.entrance,
    exit: req.body.roomData.exit,
    accessPoint: req.body.roomData.accessPoint,
    exhibit: req.body.roomData.exhibit,
    wall: req.body.roomData.wall,
    positionThatWillUndo: req.body.roomData.positionThatWillUndo,
    counterAccessPoint: req.body.roomData.counterAccessPoint,
    counterExhibit: req.body.roomData.counterExhibit,
    counterWall: req.body.roomData.counterWall,
    counterAllPositions: req.body.roomData.counterAllPositions,
    allPositions: req.body.roomData.allPositions,
    entranceBadge: req.body.roomData.entranceBadge,
    exitBadge: req.body.roomData.exitBadge,
    accessPointBadge: req.body.roomData.accessPointBadge,
    exhibitBadge: req.body.roomData.exhibitBadge,
    height: req.body.roomData.height,
    width: req.body.roomData.width,
    isResized: req.body.roomData.isResized,
    dropdownSelectionsReducer: req.body.roomData.dropdownSelectionsReducer,
    counterAPFromSquareComponent:
      req.body.roomData.counterAPFromSquareComponent,
    counterExhibitFromSquareComponent:
      req.body.roomData.counterExhibitFromSquareComponent,
    counterWallFromSquareComponent:
      req.body.roomData.counterWallFromSquareComponent,
    accessPointPositionArrayFromSquareComponent:
      req.body.roomData.accessPointPositionArrayFromSquareComponent,
    exhibitPositionArrayFromSquareComponent:
      req.body.roomData.exhibitPositionArrayFromSquareComponent,
    wallPositionArrayFromSquareComponent:
      req.body.roomData.wallPositionArrayFromSquareComponent,
    nameOfTemplate: req.body.roomData.nameOfTemplate,
  };

  const query = { nameOfTemplate: postedData.nameOfTemplate };
  const options = { returnNewDocument: true };

  const roomToReplace = Room.findOneAndReplace(query, postedData, options)
    .then(results => {
      return results;
    })
    .catch(error => {
      console.error.name(error);
    });

  const replaceRoomFeature = async () => {
    const template = await roomToReplace;

    template ? console.log('Room was replaced in database.') : next();
  };

  replaceRoomFeature();
};

const replaceRoom = { replaceRoomInDataBase };

module.exports = replaceRoom;
