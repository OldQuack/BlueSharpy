const mongoose = require("mongoose");

const avDogsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  color: String,
  weight: Number,
  age: Number,
  gender: Number,
});

module.exports = mongoose.model("AvDogss", avDogsSchema);
