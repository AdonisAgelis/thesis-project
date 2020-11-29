const { db } = require("../models/user.model");

exports.allAccess = (req, res) => {
  db.collection("rooms")
    .find({ userId: req.body.localStorageUserId.id })
    .toArray()
    .then((results) => {
      console.log(results);
      res.status(200).send(results);
    })
    .catch((error) => console.error.name(error));
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
