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
    total_ratings: ["3", "4", "4"],
    average_rating: 4,
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
  {
    name: "Giovany",
    email: "giochavez320@gmail.com",
    password: "password12345",
    picture_path: "/tmp_uploads/f66a3bc8-0b42-49a2-9671-31045a707531-man 5.jpg",
    total_ratings: ["4", "4", "5"],
    average_rating: 6,
    created_dt: Date.now(),
    favorites: [],
    listings: [
      {
        listing_id: uuid(),
        title: "Go Kart",
        description: "The ride of your life",
        status: "Active",
        category: "Automobile",
        image_path: "uploads/1f0be074-82a7-4950-82de-5f27ed7089ae-haircut.jpg",
        date_created: Date.now(),
      },
      {
        listing_id: uuid(),
        title: "Electric Guitar",
        description:
          "Like an acoustic guitar, but better!",
        status: "Active",
        category: "Instrument",
        image_path: "uploads/136065de-eb4b-4534-9323-79373a290595-mower.jpg",
        date_created: Date.now(),
      },
    ],
  },
  {
    name: "Keith",
    email: "keithblack4290@gmail.com",
    password: "password12345",
    picture_path: "/tmp_uploads/f66a3bc8-0b42-49a2-9671-31045a707531-man 5.jpg",
    total_ratings: ["1", "1", "1"],
    average_rating: 1,
    created_dt: Date.now(),
    favorites: [],
    listings: [
      {
        listing_id: uuid(),
        title: "Jet Ski",
        description: "1989 all original, like brand new",
        status: "Active",
        category: "Automobile",
        image_path: "uploads/1f0be074-82a7-4950-82de-5f27ed7089ae-haircut.jpg",
        date_created: Date.now(),
      },
      {
        listing_id: uuid(),
        title: "Babe Ruth Baseball Card",
        description:
          "Mint condition, never opened",
        status: "Active",
        category: "Collectables",
        image_path: "uploads/136065de-eb4b-4534-9323-79373a290595-mower.jpg",
        date_created: Date.now(),
      },
    ],
  },
  {
    name: "Brice",
    email: "brice.huisken@gmail.com",
    password: "password12345",
    picture_path: "/tmp_uploads/f66a3bc8-0b42-49a2-9671-31045a707531-man 5.jpg",
    total_ratings: ["3", "3", "3"],
    average_rating: 3,
    created_dt: Date.now(),
    favorites: [],
    listings: [
      {
        listing_id: uuid(),
        title: "Broncos Hat",
        description: "Grey, was blue... signed by John Elway",
        status: "Active",
        category: "Clothing",
        image_path: "uploads/1f0be074-82a7-4950-82de-5f27ed7089ae-haircut.jpg",
        date_created: Date.now(),
      },
    ],
  }
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
