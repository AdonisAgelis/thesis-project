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

exports.allAccess = (req, res) => {
  res.status(200).send('All Access Content.');
};

exports.simulation = (req, res) => {
  res.status(200).send('All Access Content.');
};
