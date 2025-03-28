require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const avdogs = require("./server/routes/avDogsRoute"); // Assuming your routes are in a separate folder

const app = express();

// Middleware for logging
app.use(morgan("dev"));

// Middleware to parse incoming request data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS Middleware - Handles cross-origin requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // If the request method is OPTIONS, return a 200 response
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    return res.status(200).json({});
  }

  next();
});

// Routes
app.use("/avDogs", avdogs);

// MongoDB connection
mongoose
  .connect(
    `mongodb+srv://diogobmp:${process.env.MONGO_AATLAS_PW}@cluster0.aniwur0.mongodb.net/${process.env.MONGO_DB_NAME}`,
    { serverSelectionTimeoutMS: 30000 }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    console.error("Full error:", err);
  });

// Handle 404 errors for routes that don't exist
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
