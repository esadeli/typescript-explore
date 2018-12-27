import {Request, Response} from 'express'
import { ContactController } from '../controllers/contactController'


export class Routes {
  public contactController: ContactController = new ContactController();
  public routes(app: any): void {
    // index page
    app.route('/')
        .get((req: Request, res:Response)=>{
          res.status(200).json({
            message: 'GET Request Successful'
          })
        })

    // contact
    app.route('/contact')
        .get(this.contactController.list)
        .post(this.contactController.add)
    
    app.route('/contact/:id')
        .get(this.contactController.getDetail)
        .put(this.contactController.update)
        .delete(this.contactController.remove)
  }
}