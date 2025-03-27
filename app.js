require("dotenv").config(); // Make sure environment variables are loaded
const express = require("express");
const mongoose = require("mongoose");
const avdogs = require("./server/routes/avDogsRoute");

const app = express();

app.use(express.json());

app.use("/avDogs", avdogs);

// MongoDB connection
mongoose
  .connect(
    `mongodb+srv://diogobmp:${process.env.MONGO_AATLAS_PW}@cluster0.aniwur0.mongodb.net/${process.env.MONGO_DB_NAME}`,
    {
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    console.error("Full error:", err);
  });

module.exports = app;
