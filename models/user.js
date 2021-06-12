const mongoose = require("mongoose");
//const passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  picture_path: { type: String },
  total_ratings: [],
  average_rating: { type: String },
  created_dt: { type: Date, default: Date.now() },
  listings: [{ type: Schema.Types.ObjectId, ref: "Listings" }], //Schema.Types.ObjectId
  favorites: [{ type: Schema.Types.ObjectId, ref: "Listings" }],
});

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});
//userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

module.exports = User;
