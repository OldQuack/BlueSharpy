require("dotenv").config();
const mongoose = require("mongoose");

const testConnection = async () => {
  try {
    console.log(
      "Starting MongoDB connection...",
      `mongodb+srv://diogobmp:${process.env.MONGO_AATLAS_PW}@cluster0.aniwur0.mongodb.net/${process.env.MONGO_DB_NAME}`
    );

    // Try to connect to MongoDB
    await mongoose.connect(
      `mongodb+srv://diogobmp:${process.env.MONGO_AATLAS_PW}@cluster0.aniwur0.mongodb.net/${process.env.MONGO_DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected successfully!");

    // Close the connection after successful test
  } catch (err) {
    // Catch connection error and log it
    console.error("Error connecting to MongoDB:", err.message);
    console.error("Full error:", err);
  }
};

// Call the function to test the connection
testConnection();
