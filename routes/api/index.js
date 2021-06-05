const router = require("express").Router();
const userRoutes = require("./users");
const uploadRoutes = require("./upload");
const listingRoutes = require("./listings");
const profileRoutes = require("./profile");
<<<<<<< HEAD

=======
// routes
>>>>>>> 840fbe64db86b728165c37954adbdf185a504f26
router.use("/users", userRoutes);
router.use("/upload", uploadRoutes);
router.use("/listings", listingRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
