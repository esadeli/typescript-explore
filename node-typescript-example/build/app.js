"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', function (req, res) {
    console.log('OK');
    res.status(200).send('OK');
});
app.listen(process.env.PORT || 3000, function () {
    console.log("Listen to PORT " + process.env.PORT);
});
