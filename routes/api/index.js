const router = require("express").Router();
const userRoutes = require("./users");
<<<<<<< HEAD
const uploadRoutes = require("./upload")

// routes
router.use("/users", userRoutes);
router.use("/upload", uploadRoutes)
=======
const listingRoutes = require("./listings");
const profileRoutes = require("./profile");

router.use("/users", userRoutes);
router.use("/listings", listingRoutes);
router.use("/profile", profileRoutes);
>>>>>>> 33b9de1ef498a478af8881a966c9d31b582bb38a

module.exports = router;
