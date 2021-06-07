const mongoose = require("mongoose");
//const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  picture_path: { type: String }, //, required: true
  total_ratings: [],
  average_rating: { type: String },
  created_dt: { type: Date, default: Date.now() },
  listings: [{ type: Schema.Types.ObjectId, ref: "Listings" }],
  favorites: [],
});

//userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

module.exports = User;
