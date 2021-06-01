const router = require("express").Router();
const userRoutes = require("./users");
const listingRoutes = require("./listings");

// Book routes
router.use("/users", userRoutes);
router.use("/listings", listingRoutes);

module.exports = router;
