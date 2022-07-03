const express = require("express");
const Router = express.Router();
const authController = require("../../controllers/Auth/authController");

Router.post("/signup", authController.signup);
Router.post("/login", authController.login);
Router.get("/allUsers", authController.AllUsers);
Router.get("/getUser/:id", authController.getUser);
Router.post("/deposit", authController.depositTransaction);
Router.post("/withdraw", authController.withdrawTransaction);

module.exports = Router;
