const brandRoute = require("express").Router();

const {brandController} = require ("../controllers");

brandRoute.get("/all", brandController.getAllBrands);
brandRoute.post("/add", brandController.add);
brandRoute.delete("/remove/:id", brandController.remove);
brandRoute.put("/edit/:id", brandController.edit);

brandRoute.get("/details/:id/products", brandController.getDetailsById);

module.exports = brandRoute;
