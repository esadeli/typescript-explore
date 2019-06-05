require("dotenv").config();
import express = require("express");
import mongoose from "mongoose";
import {Routes} from "./routes/contactRoutes";

class App {
  public app: express.Application;
  public routeContact: Routes = new Routes ();
  public mongoUrl: string = process.env.MONGO_URL + "";

  constructor() {
    this.app = express();
    this.config();
    this.routeContact.routes(this.app);
  }
  private config(): void {
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.json());
    this.mongoSetUp()
  }
  private mongoSetUp(): void {
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB Connection error"));
  }
}
<<<<<<< HEAD
export default new App().app
=======
export default new App ().app;
>>>>>>> 5a6f9440a844f8cc06e1179f372cf61983cf8507
