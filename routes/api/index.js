const router = require("express").Router();
const userRoutes = require("./users");
const listingRoutes = require("./listings");
const profileRoutes = require("./profile");

<<<<<<< HEAD
// User routes
=======
>>>>>>> 33b9de1ef498a478af8881a966c9d31b582bb38a
router.use("/users", userRoutes);
router.use("/listings", listingRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
