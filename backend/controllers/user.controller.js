const { db } = require("../models/user.model");

exports.allAccess = (req, res) => {
  console.log(req.body.localStorageUserId.id);
  // db.collection("rooms")
  //   .find(userId)
  //   .toArray()
  //   .then((results) => {
  //     // results = results.filter((userId) => userId == req.body.id);

  //     //req.body.["id"] the id of user that is signed in!
  //     //results comes from the db of "rooms"

  //     console.log(req.body["id"]);

  //     // const userIdValue = results[7]["userId"];
  //     // useridd = { userId: userIdValue };
  //     // if (req.body["id"] === useridd["userId"]) {
  //     //   res.status(200).send(useridd);
  //     // }
  //     res.status(200).send(results);
  //   })
  //   .catch((error) => console.error.name(error));
  db.collection("rooms")
    .find({ userId: "5fbc0ffa997c8524944cfefc" })
    .toArray()
    .then((results) => {
      // results = results.filter((userId) => userId == req.body.id);

      //req.body.["id"] the id of user that is signed in!
      //results comes from the db of "rooms"

      console.log(results);

      // const userIdValue = results[7]["userId"];
      // useridd = { userId: userIdValue };
      // if (req.body["id"] === useridd["userId"]) {
      //   res.status(200).send(useridd);
      // }
      res.status(200).send(results);
    })
    .catch((error) => console.error.name(error));
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
