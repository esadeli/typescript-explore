"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express = require("express");
var contactRoutes_1 = require("./routes/contactRoutes");
var mongoose_1 = __importDefault(require("mongoose"));
var App = /** @class */ (function () {
    function App() {
        this.routeContact = new contactRoutes_1.Routes();
        this.mongoUrl = process.env.MONGO_URL + '';
        this.app = express();
        this.config();
        this.routeContact.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.mongoSetUp();
    };
    App.prototype.mongoSetUp = function () {
        mongoose_1.default.connect(this.mongoUrl, { useNewUrlParser: true });
        var db = mongoose_1.default.connection;
        db.on("error", console.error.bind(console, "MongoDB Connection error"));
    };
    return App;
}());
exports.default = new App().app;
