const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }, // hashing???
  picture_path: { type: String, required: true },
  total_ratings: [],
  average_rating: { type: String },
  created_dt: { type: Date, default: Date.now() },
  listings: [
    {
      title: {
        type: String,
        trim: true,
        required: "Enter a title",
      },
      description: {
        type: String,
        trim: true,
        required: "Enter a description",
      },
      date_created: {
        type: Date,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      status: {
        type: String,
      },
      image_path: [],
    },
  ],
  favorites: [],
});

const User = mongoose.model("User", userSchema);

module.exports = User;