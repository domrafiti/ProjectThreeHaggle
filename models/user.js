const mongoose = require("mongoose");
const Schema = mongoose.Schema;
<<<<<<< HEAD
const uuid = require("uuid").v4;
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
=======
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
>>>>>>> 33b9de1ef498a478af8881a966c9d31b582bb38a
  password: { type: String, required: true }, // hashing???
  picture_path: { type: String, required: true },
  total_ratings: [],
  average_rating: { type: String },
  created_dt: { type: Date, default: Date.now() },
  favorites: [],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
