const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Listings.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Listings.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log('create body', req.body);
    db.Listings.create(req.body)
      .then((dbModel) => { console.log(dbModel) }) //res.json(dbModel)
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Listings.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Listings.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
