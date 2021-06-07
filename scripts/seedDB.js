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
    email: "dom.rafiti@gmail.com",
    password: "password12345",
    picture_path: "/uploads/tyler-nix-ZGa9d1a_4tA-unsplash.jpg",
    total_ratings: ["3", "4", "4"],
    average_rating: 4,
    created_dt: Date.now(),
    listings: [],
    favorites: [],
  },
  {
    name: "Giovany",
    email: "giochavez320@gmail.com",
    password: "password12345",
    picture_path: "/uploads/albert-dera-ILip77SbmOE-unsplash.jpg",
    total_ratings: ["4", "4", "5"],
    average_rating: 6,
    created_dt: Date.now(),
    listings: [],
    favorites: [],
  },
  {
    name: "Keith",
    email: "keithblack4290@gmail.com",
    password: "password12345",
    picture_path: "/uploads/karsten-winegeart-kWm6bXPJl4s-unsplash.jpg",
    total_ratings: ["1", "1", "1"],
    average_rating: 1,
    created_dt: Date.now(),
    listings: [],
    favorites: [],
  },
  {
    name: "Brice",
    email: "brice.huisken@gmail.com",
    password: "password12345",
    picture_path: "/uploads/ben-parker-NohB3FJSY90-unsplash.jpg",
    total_ratings: ["3", "3", "3"],
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
      "http://localhost:3000/uploads/1f0be074-82a7-4950-82de-5f27ed7089ae-haircut.jpg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Riding Mower",
    description:
      "John Deere Z335E 20-HP V-Twin Dual Hydrostatic 42-in Zero-Turn Lawn Mower with Mulching Capability",
    status: "Active",
    category: "Automobiles",
    image_path: "uploads/0b13f15b-89d5-4a36-9375-d826a1fb7bb5-mower.jpg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Go Kart",
    description: "The ride of your life",
    status: "Active",
    category: "Automobile",
    image_path: "uploads/f95be5ef-7d73-4375-9861-65fe172b0a6f-go-cart.jpeg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Electric Guitar",
    description: "Like an acoustic guitar, but better!",
    status: "Active",
    category: "Instrument",
    image_path: "uploads/pexels-pixabay-164774.jpg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Jet Ski",
    description: "1989 all original, like brand new",
    status: "Active",
    category: "Automobile",
    image_path: "uploads/used-jet-ski-buying-guide-2-stroke.jpeg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Babe Ruth Baseball Card",
    description: "Mint condition, never opened",
    status: "Active",
    category: "Collectables",
    image_path:
      "uploads/https___blogs-images.forbes.com_davidseideman_files_2016_12_Ruth-resized.jpg",
    date_created: Date.now(),
    user: "",
  },
  {
    title: "Broncos Hat",
    description: "Grey, was blue... signed by John Elway",
    status: "Active",
    category: "Clothing",
    image_path: "uploads/59001023-1.jpeg",
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
