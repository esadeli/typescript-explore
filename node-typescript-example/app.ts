require('dotenv').config()
import express = require('express');
const app: express.Application = express();

import {Request, Response} from 'express';

app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.get('/',(req: Request,res: Response)=>{
  console.log('OK')
  res.status(200).send('OK')
})

app.get('/dummydata',(req: Request,res: Response)=>{
  let dummyData: {name:string, role: string, age: number} ={
    name: 'Efrat',
    role: 'Software Engineer',
    age: 23
  }
  res.status(200).json(dummyData)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listen to PORT ${process.env.PORT}`)
})