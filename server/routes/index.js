const{Router} = require("express")

const route = Router();

const mainEndPoint = "/api";

route.get(mainEndPoint, (req, res)=> {
    res.status(200).json({message: "API for FS applications",});
});

// // Routes
const userRoutes = require("./user")
const ProductsRoutes = require ("./product");
const brandRoutes = require ("./brand");

// //Endpoint
route.use(`${mainEndPoint}/users`, userRoutes);
route.use(`${mainEndPoint}/products`, ProductsRoutes);
route.use(`${mainEndPoint}/brands`, brandRoutes);

//export module nya ke app.js sbagai server
module.exports = route;