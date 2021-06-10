const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const uuid = require("uuid").v4;

const listingSchema = new Schema({
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
    required: "Choose a category",
  },
  status: {
    type: String,
  },
  user: {
    //updated to string for testing purposes - will need to figure out how to get userID value from session/users model.
    type: Schema.Types.ObjectId,

    //ref: "User",
  },
  image_path: [],
});

const Listings = mongoose.model("Listings", listingSchema);

module.exports = Listings;
