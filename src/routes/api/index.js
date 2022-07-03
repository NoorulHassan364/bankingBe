const express = require("express");
const authRoutes = require("./authRoutes");
// const userRoutes = require("./userRoutes");
// const reportRoutes = require("./reportRoutes");
// const dashboardRoutes = require("./dashboardRoutes");
// const folderRoutes = require("./folderRoutes");

let router = express.Router();

router.use("/auth", authRoutes);
// router.use("/user", userRoutes);


module.exports = router;
