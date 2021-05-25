const mongoose = require("mongoose");
const db = require("../models");
const uuid = require("uuid").v4;
// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Haggle", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const userSeed = [
  {
    name: "Dom",
    email: "dom.rafiti@gmail.com",
    password: "password12345",
    picture_path: "/tmp_uploads/f66a3bc8-0b42-49a2-9671-31045a707531-man 5.jpg",
    total_ratings: ["3", "3", "3"],
    average_rating: 3,
    created_dt: Date.now(),
    favorites: [],
    listings: [
      {
        listing_id: uuid(),
        title: "Barber",
        description: "Clean ya up real nice",
        status: "Active",
        category: "Services",
        image_path: "uploads/1f0be074-82a7-4950-82de-5f27ed7089ae-haircut.jpg",
        date_created: Date.now(),
      },
      {
        listing_id: uuid(),
        title: "Riding Mower",
        description:
          "John Deere Z335E 20-HP V-Twin Dual Hydrostatic 42-in Zero-Turn Lawn Mower with Mulching Capability",
        status: "Active",
        category: "Automobiles",
        image_path: "uploads/136065de-eb4b-4534-9323-79373a290595-mower.jpg",
        date_created: Date.now(),
      },
    ],
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
