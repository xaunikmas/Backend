const productRoute = require("express").Router();

const {productController} = require("../controllers");

productRoute.get("/", productController.getProducts);
productRoute.post("/store", productController.storeProduct);
productRoute.put("/edit/:id", productController.edit);
productRoute.delete("/destroy/:Id", productController.destroy);

productRoute.get("/details/:id", productController.getDetailsById);

module.exports = productRoute;

