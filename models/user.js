const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  // username: { type: String, required: true },
  // password: { type: String, required: true }, // hashing???
  picture_path: { type: String },
  total_ratings: [],
  average_rating: { type: String },
  created_dt: { type: Date, default: Date.now() },
  listings: [{ type: Schema.Types.ObjectId, ref: "Listings" }],
  favorites: [],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
