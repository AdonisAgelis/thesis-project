const db = require('../models');
const Room = db.room;

replaceRoomInDataBase = (req, res, next) => {
  const postedData = {
    nameOfTemplate: req.body.roomData.nameOfTemplate,
  };
  console.log(`These are the original data: ${postedData}`);

  const postedJSONStringData = JSON.stringify(postedData);
  console.log(`These are the string data: ${postedJSONStringData}`);

  const postedParsedJSONData = JSON.parse(postedJSONStringData);
  console.log(`These are the parsed data: ${postedParsedJSONData}`);

  const dataToSearch = postedParsedJSONData.nameOfTemplate;
  console.log(`These are the data to search: ${dataToSearch}`);
  console.log(`This is the type: ${typeof dataToSearch}`);

  const roomToReplace = Room.findOne({ nameOfTemplate: dataToSearch })
    .then(results => {
      console.log(`These are the results: ${results}`);
      return results;
    })
    .catch(error => {
      console.error.name(error);
    });

  const replaceRoomFeature = async () => {
    const template = await roomToReplace;
    console.log(`This is the template: ${template}`);

    template ? console.log('Room already exists bruh') : next();
  };

  replaceRoomFeature();

  // next();
};

const replaceRoom = { replaceRoomInDataBase };

module.exports = replaceRoom;
