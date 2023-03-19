const express = require("express");
const app = express();
const Port = process.env.Port ||3000;
const cors = require ("cors");

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true,}));

const route = require ("./routes");

app.use(route);

app.listen(Port, ()=> {console.log (`server is running on port ${Port}`)});

