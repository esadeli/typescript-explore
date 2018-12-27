import * as mongoose from 'mongoose';

const Schema = mongoose.Schema

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Please enter the first name'
  },
  lastName: {
    type: String,
    required: 'Please enter the last name'
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
},{
  timestamps: true
})

