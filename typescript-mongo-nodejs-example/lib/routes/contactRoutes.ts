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
        // .get((req: Request, res: Response)=> {
        //   res.status(200).json({
        //     message: 'GET Request contact Successful'
        //   })
        // })
        .post(this.contactController.add)
        // .post((req: Request, res: Response)=>{
        //   res.status(201).json({
        //     message: 'POST Request contact Successful'
        //   })
        // })
    
    app.route('/contact/:id')
        .get(this.contactController.getDetail)
        // .get((req: Request, res: Response)=>{
        //   res.status(200).json({
        //     message: 'GET Request contact detali Successful'
        //   })
        // })
        .put(this.contactController.update)
        // .put((req: Request, res: Response)=>{
        //   res.status(200).json({
        //     message: 'PUT Request contact detali Successful'
        //   })
        // })
        .delete(this.contactController.remove)
        // .delete((req: Request, res: Response) => {
        //   res.status(200).json({
        //     message: 'DELETE Request contact detali Successful'
        //   })
        // })
  }
}