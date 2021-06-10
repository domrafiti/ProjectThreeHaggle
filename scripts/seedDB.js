const mongoose = require("mongoose");
const db = require("../models");
//const uuid = require("uuid").v4;
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
    username: "dom.rafiti@gmail.com",
    password: "password12345",
    picture_path: "https://haggle-project-three.s3.us-east-2.amazonaws.com/dude4.jpg",
    total_ratings: [3, 4, 4, 1, 5],
    average_rating: 4,
    created_dt: Date.now(),
    listings: [],
    favorites: [],
  },
  {
    name: "Giovany",
    username: "giochavez320@gmail.com",
    password: "password12345",
    picture_path: "https://haggle-project-three.s3.us-east-2.amazonaws.com/dude3.jpg",
    total_ratings: [4, 4, 5, 3, 5],
    average_rating: 6,
    created_dt: Date.now(),
    listings: [],
    favorites: [],
  },
  {
    name: "Keith",
    username: "keithblack4290@gmail.com",
    password: "password12345",
    picture_path: "https://haggle-project-three.s3.us-east-2.amazonaws.com/dude2.jpg",
    total_ratings: [1, 1, 1, 2, 4],
    average_rating: 1,
    created_dt: Date.now(),
    listings: [],
    favorites: [],
  },
  {
    name: "Brice",
    username: "brice.huisken@gmail.com",
    password: "password12345",
    picture_path: "https://haggle-project-three.s3.us-east-2.amazonaws.com/dude1.jpg",
    total_ratings: [3, 3, 3, 2, 5],
    average_rating: 3,
    created_dt: Date.now(),
    listings: [],
    favorites: [],
  },
];

const listingSeed = [
  {
    title: "Barber",
    description: "Clean ya up real nice",
    status: "Active",
    category: "Services",
    image_path:
      "https://haggle-project-three.s3.us-east-2.amazonaws.com/Haircut.jpg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Riding Mower",
    description:
      "John Deere Z335E 20-HP V-Twin Dual Hydrostatic 42-in Zero-Turn Lawn Mower with Mulching Capability",
    status: "Active",
    category: "Automobiles",
    image_path: "https://haggle-project-three.s3.us-east-2.amazonaws.com/RidingMower.jpg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Go Kart",
    description: "The ride of your life",
    status: "Active",
    category: "Automobile",
    image_path: "https://haggle-project-three.s3.us-east-2.amazonaws.com/goCart.jpeg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Electric Guitar",
    description: "Like an acoustic guitar, but better!",
    status: "Active",
    category: "Instrument",
    image_path: "https://haggle-project-three.s3.us-east-2.amazonaws.com/guitar.jpg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Jet Ski",
    description: "1989 all original, like brand new",
    status: "Active",
    category: "Automobile",
    image_path: "https://haggle-project-three.s3.us-east-2.amazonaws.com/jetSki.jpeg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Babe Ruth Baseball Card",
    description: "Mint condition, never opened",
    status: "Active",
    category: "Collectables",
    image_path:
      "https://haggle-project-three.s3.us-east-2.amazonaws.com/BabeRuth.jpg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Broncos Hat",
    description: "Grey, was blue... signed by John Elway",
    status: "Active",
    category: "Clothing",
    image_path: "https://haggle-project-three.s3.us-east-2.amazonaws.com/hat.jpeg",
    date_created: Date.now(),
    user: "",
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

db.Listings.remove({})
  .then(() => db.Listings.collection.insertMany(listingSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
