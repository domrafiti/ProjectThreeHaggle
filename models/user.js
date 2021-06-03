const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid").v4;
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }, // hashing???
  picture_path: { type: String, required: true },
  total_ratings: [],
  average_rating: { type: String },
  created_dt: { type: Date, default: Date.now() },
  favorites: [],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
