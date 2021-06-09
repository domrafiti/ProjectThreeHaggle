const { User } = require("../models");

const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    User.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    User.findById(req.params.id)
      .populate("listings")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) throw err;
      if (!doc) {
        //const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
          name: req.body.name,
          username: req.body.username,
          password: req.body.password,
        });
        await newUser.save();
        res.send("User created");
      }
    });
  },
  update: function (req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
