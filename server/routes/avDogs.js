const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const AvDogs = require("../models/avDogsModel");

router.get("/", (req, res, next) => {
  AvDogs.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res, next) => {
  const avdogs = new AvDogs({
    _id: new mongoose.Types.ObjectId(),
    color: req.body.color,
    weight: req.body.weight,
    age: req.body.age,
    gender: req.body.gender,
  });
  avdogs
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "handling Post requests to /avdogss",
        createdAvDogs: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:avDogsId", (req, res, next) => {
  const id = req.params.avDogsId;
  AvDogs.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:avDogsId", (req, res, next) => {
  const id = req.params.avDogsId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  AvDogs.update(
    { _id: id },
    { $set: { name: req.body.newName, price: updateOps } }
  )
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
  res.status(200).json({
    message: "Updated avdogs",
  });
});

router.delete("/:avDogsId", (req, res, next) => {
  const id = req.params.avDogsId;
  AvDogs.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
