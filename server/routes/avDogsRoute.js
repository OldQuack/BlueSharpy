const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const AvDogs = require("../models/avDogsModel");

// Test route to check if it's working
router.get("/", (req, res) => {
  res.status(200).json({ message: "Available dogs route is working!" });
});

// POST request to add a new dog
router.post("/", async (req, res) => {
  try {
    const avdog = new AvDogs({
      _id: new mongoose.Types.ObjectId(),
      color: req.body.color,
      weight: req.body.weight,
      age: req.body.age,
      gender: req.body.gender,
    });

    const result = await avdog.save();
    res
      .status(201)
      .json({ message: "Dog added successfully", createdAvDog: result });
  } catch (error) {
    console.error("Error saving to DB:", error);
    res.status(500).json({ error });
  }
});

module.exports = router;
