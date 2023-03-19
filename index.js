const express = require ('express');

const {Router} = express.Router;

const app = express.Router();

const Port = 3000;

app.get(Port, (req,res) => {
    res.send (`Server running on port : ${Port}`)
});