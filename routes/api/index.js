const router = require("express").Router();
const userRoutes = require("./users");
const uploadRoutes = require("./upload")

// routes
router.use("/users", userRoutes);
router.use("/upload", uploadRoutes)

module.exports = router;
