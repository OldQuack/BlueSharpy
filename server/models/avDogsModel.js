const mongoose = require("mongoose");

const avDogsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  color: { type: String, required: true },
  weight: { type: Number, required: true },
  age: { type: Number, required: true },
  gender: { type: Number, enum: [1, 2], required: true }, // 1 = Male, 2 = Female
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("AvDogs", avDogsSchema);
