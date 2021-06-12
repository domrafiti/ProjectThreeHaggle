const router = require("express").Router();
const listingsController = require("../../controllers/listingsController");

// Matches with "/api/listings"
router
  .route("/")
  .get(listingsController.findAll)
  .post(listingsController.create);

// Matches with "/api/listings/:id"
router
  .route("/:id")
  .get(listingsController.findById)
  .put(listingsController.update)
  .delete(listingsController.remove);

module.exports = router;
