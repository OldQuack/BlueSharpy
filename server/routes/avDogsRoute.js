const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const AvDogs = require("../models/avDogsModel");
const multer = require("multer");
const path = require("path");

// Get all available dogs
router.get("/", async (req, res) => {
  try {
    const docs = await AvDogs.find().exec();
    console.log(docs);
    res.status(200).json(docs);
  } catch (err) {
    console.error("Error fetching dogs:", err);
    res.status(500).json({
      message: "An error occurred while fetching the dogs.",
      error: err.message,
    });
  }
});

// Configure file upload destination and filename
const uploadDir = path.join(__dirname, "../../uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Make sure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // Only accept image files
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("File is not an image!"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// POST route to add a dog
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const avdog = new AvDogs({
      _id: new mongoose.Types.ObjectId(),
      color: req.body.color,
      weight: req.body.weight,
      age: req.body.age,
      gender: req.body.gender,
      imageUrl: req.file.path, // Save the path of the uploaded image
    });
    console.log("avdog", avdog);

    const result = await avdog.save();
    res.status(201).json({ message: "Dog added", createdAvDog: result });
  } catch (error) {
    console.error("Error adding dog:", error);
    res.status(500).json({ error: error.message });
  }
});

// Serve static files from the uploads directory
router.use("/uploads", express.static(uploadDir));

// Get a single dog by ID
router.get("/:avdogId", async (req, res) => {
  try {
    const id = req.params.avdogId;
    const dog = await AvDogs.findById(id);
    if (!dog) {
      return res.status(404).json({
        message: "Dog not found",
      });
    }
    console.log(dog);
    res.status(200).json(dog);
  } catch (err) {
    console.error("Error fetching dog:", err);
    res.status(500).json({
      message: "An error occurred while fetching the dog.",
      error: err.message,
    });
  }
});

// Update a dog by ID
router.patch("/:avdogId", async (req, res) => {
  try {
    const id = req.params.avdogId;
    const updatedDog = await AvDogs.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedDog) {
      return res.status(404).json({
        message: "Dog not found",
      });
    }
    console.log(`Dog with ID ${id} updated`);
    res.status(200).json({
      message: "Dog updated successfully",
      updatedDog,
    });
  } catch (err) {
    console.error("Error updating dog:", err);
    res.status(500).json({
      message: "An error occurred while updating the dog.",
      error: err.message,
    });
  }
});

// Delete a dog by ID
router.delete("/:avdogId", async (req, res) => {
  try {
    const id = req.params.avdogId;
    const deletedDog = await AvDogs.findByIdAndDelete(id);
    if (!deletedDog) {
      return res.status(404).json({
        message: "Dog not found",
      });
    }
    console.log(`Dog with ID ${id} deleted`);
    res.status(200).json({
      message: "Dog deleted successfully",
      deletedDog,
    });
  } catch (err) {
    console.error("Error deleting dog:", err);
    res.status(500).json({
      message: "An error occurred while deleting the dog.",
      error: err.message,
    });
  }
});

module.exports = router;
