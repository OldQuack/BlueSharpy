const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const avDogsRoutes = require("./routes/avDogs");
const ordersRoutes = require("./routes/orders");
const authRoutes = require("./routes/auth");

mongoose
  .connect(
    `mongodb+srv://diogobmp:${process.env.MONGO_AATLAS_PW}@cluster0.aniwur0.mongodb.net/your-database-name`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Temporarily disable CORS middleware for testing
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  next();
});

app.use("/avDogs", avDogsRoutes);
app.use("/orders", ordersRoutes);
app.use("/auth", authRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
