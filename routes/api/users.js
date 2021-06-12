const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/").get(userController.findAll).post(userController.create);

router.route("/favorites/:id").put(userController.favorite);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/id")
  .put(userController.update)

module.exports = router;
