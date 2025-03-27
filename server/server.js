const express = require("express");
const cors = require("cors");
const app = express();

// Import your auth routes
const authRoutes = require("./routes/auth"); // Adjust the path as needed

app.use(express.json()); // For parsing application/json

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:8080", // Replace with your frontend URL
    credentials: true, // Allow cookies & authentication headers
  })
);

// Use the auth routes for /auth endpoints
app.use("/auth", authRoutes); // This connects the routes from auth.js

// Listen on a port
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
