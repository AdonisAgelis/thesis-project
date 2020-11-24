const { db } = require("../models/user.model");

exports.allAccess = (req, res) => {
  db.collection("rooms")
    .find()
    .toArray()
    .then((results) => {
      // results = results.filter((userId) => userId == req.body.id);
      console.log(req.body);

      const userIdValue = results[7]["userId"];
      useridd = { userId: userIdValue };

      res.status(200).send(useridd);
    })
    .catch((error) => console.error.name(error));
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
