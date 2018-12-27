require('dotenv').config()
import express = require('express');
import {Routes} from './routes/contactRoutes'
import mongoose from 'mongoose'
// const app: express.Application = express();

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.get('/', (req: Request, res: Response)=>{
//   res.status(200).send('OK');
// });

// app.listen(process.env.PORT || 3001, () => {
//   console.log(`Listening to PORT ${process.env.PORT}`);
// });
class App {
  public app: express.Application;
  public routeContact:Routes = new Routes ()
  public mongoUrl:string = process.env.MONGO_URL+''

  constructor () {
    this.app = express();
    this.config();
    this.routeContact.routes(this.app);
  }
  config (): void {
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.json());
    this.mongoSetUp()
  }
  private mongoSetUp(): void {
    // mongoose.Promise = global.Promise
    mongoose.connect(this.mongoUrl,{useNewUrlParser: true})
    let db = mongoose.connection
    db.on("error", console.error.bind(console, "MongoDB Connection error"));
  }
}
export default new App ().app