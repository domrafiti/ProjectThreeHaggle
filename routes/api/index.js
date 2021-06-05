const router = require("express").Router();
const userRoutes = require("./users");
const listingRoutes = require("./listings");
const profileRoutes = require("./profile");

// User routes
router.use("/users", userRoutes);
router.use("/listings", listingRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
