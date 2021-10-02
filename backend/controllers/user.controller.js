const { db } = require('../models/user.model');

exports.userWorkstation = async (req, res) => {
  const rooms = db
    .collection('rooms')
    .find({ userId: req.body.localStorageUserId.id })
    .toArray()
    .then(results => {
      return results;
      // res.status(200).send(results);
    })
    .catch(error => console.error.name(error));

  const graphs = db
    .collection('simulationrooms')
    .find({ userID: req.body.localStorageUserId.id })
    .toArray()
    .then(response => {
      return response;
      // res.status(200).send(response);
    })
    .catch(error => console.error.name(error));

  const findData = async () => {
    const returnedRooms = await rooms;
    const returnedGraphs = await graphs;

    res.status(200).send({ rooms: returnedRooms, graphs: returnedGraphs });
  };

  findData();
};

exports.allAccess = (req, res) => {
  res.status(200).send('All Access Content.');
};
