const express = require("express");
const router = express.Router();
const MuseumUserTracker = require("../models/User");

router.get("/museum-user-tracker", (req, res, next) => {
  MuseumUserTracker.find({}, "action")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/museum-user-tracker", (req, res, next) => {
  if (req.body.action) {
    MuseumUserTracker.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.get("/museum-user-tracker/log-in", (req, res, next) => {});

router.post("/museum-user-tracker/log-in", (req, res, next) => {});

router.get("/museum-user-tracker/sign-up", (req, res, next) => {});

router.post("/museum-user-tracker/sign-up", (req, res, next) => {});

router.get("/museum-user-tracker/admin", (req, res, next) => {});

router.post("/museum-user-tracker/admin", (req, res, next) => {});

router.get("/museum-user-tracker/info", (req, res, next) => {});

module.exports = router;
