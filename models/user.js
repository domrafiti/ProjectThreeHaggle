const mongoose = require("mongoose");
//const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid").v4;

const userSchema = new Schema({
  name: { type: String, required: true },
<<<<<<< HEAD
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  picture_path: { type: String }, //, required: true
=======
  username: { type: String, required: true },
  password: { type: String, required: true }, // hashing???
  picture_path: { type: String },
>>>>>>> 8b9cb79aa0098ff47d05ddf5cd212cb269d74749
  total_ratings: [],
  average_rating: { type: String },
  created_dt: { type: Date, default: Date.now() },
  listings: [{ type: Schema.Types.ObjectId, ref: "Listings" }],
  favorites: [],
});

//userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

module.exports = User;
