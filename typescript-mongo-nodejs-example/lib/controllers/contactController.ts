import * as mongoose from 'mongoose';
import {ContactSchema} from '../models/contactModel';
import {Request, Response} from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {
  public add(req: Request, res: Response) {
    let latestcontact = new Contact(req.body);
    latestcontact.save((err: any, contact: any)=>{
      if(err){
        res.status(500).json({
          message: err
        })
      }
      res.status(201).json({
        msg: 'Success create contact',
        data: contact
      })
    })
  }

  public list(req: Request, res: Response) {
    Contact.find({})
      .then((contacts:any)=>{
        res.status(201).json({
          msg: 'List of contacts',
          data: contacts
        })
      })
      .catch((err: any) =>{
        res.status(500).json({
          message: err
        })
      })
  }

  public getDetail(req: Request, res: Response) {
    Contact.findById(req.params.id,(err:any, contact:any)=>{
      if(err){
        res.status(500).json({
          message: err
        })
      }
      res.status(200).json({
        msg: 'Success get detail contact',
        data: contact
      })
    })
  }

  public update(req: Request, res: Response) {
    Contact.findByIdAndUpdate({_id: req.params.id},req.body,
      {new: true}, (err: any,contact:any)=>{
        if(err){
          res.status(500).json({
            message: err
          })
        }
        res.status(201).json({
          msg: 'Update contact',
          data: contact
        })
    })
    // Contact.findOneAndUpdate({_id: req.params.id},{new: true})
    //   .then((contact:any) =>{
    //     res.status(200).json({
    //       msg: 'Update contact',
    //       data: contact
    //     })
    //   })
    //   .catch((err:any) =>{
    //     res.status(500).json({
    //       message: err
    //     })
    //   })
  }

  public remove(req: Request, res: Response) {
    Contact.findOneAndRemove({_id: req.params.id})
    .then((contact:any) =>{
      res.status(201).json({
        msg: 'Success delete contact',
        data: contact
      })
    })
    .catch((err:any) =>{
      res.status(500).json({
        message: err
      })
    })
  //   Contact.remove({_id: req.params.id}, (err:any, contact:any)=>{
  //     if(err){
  //       res.status(500).json({
  //         message: err
  //       })
  //     }
  //     res.status(201).json({
  //       msg: 'Success delete contact',
  //       data: contact
  //     })
  //   })
  }
} 