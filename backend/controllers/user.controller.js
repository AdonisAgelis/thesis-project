const { db } = require('../models/user.model');

exports.userWorkstation = (req, res) => {
  db.collection('rooms')
    .find({ userId: req.body.localStorageUserId.id })
    .toArray()
    .then(results => {
      res.status(200).send(results);
    })
    .catch(error => console.error.name(error));
};

exports.getMongoSimData = (req, res) => {
  db.collection('simulationrooms')
    .find({})
    .toArray()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => console.error.name(error));
};

exports.allAccess = (req, res) => {
  res.status(200).send('All Access Content.');
};
