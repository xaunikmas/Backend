const {Router} = require("express")

const userRoute = require("express").Router();

const {UserController} = require("../controllers");


userRoute.get("/", UserController.getAllUsers);
userRoute.get("account/:UserId", UserController.getUserAccount);
userRoute.post("/register", UserController.register);
userRoute.post("/login", UserController.login);

userRoute.delete("/remove/:UserId", UserController.remove);
userRoute.put("/edit/:UserId", UserController.edit);

userRoute.get("/account/:UserId/products", UserController.getProductsByUser);


module.exports = userRoute;