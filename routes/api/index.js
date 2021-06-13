const router = require("express").Router();
const sendRoutes = require("./send");
const userRoutes = require("./users");
const uploadRoutes = require("./upload");
const listingRoutes = require("./listings");
const profileRoutes = require("./profile");
const loginRoutes = require("./login");



// User routes
router.use("/users", userRoutes);
router.use("/send", sendRoutes);
router.use("/upload", uploadRoutes);
router.use("/listings", listingRoutes);
router.use("/listing", listingRoutes);
router.use("/profile", profileRoutes);
router.use("/login", loginRoutes);


module.exports = router;
