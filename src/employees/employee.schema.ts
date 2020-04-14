import { Schema } from 'mongoose';

export const EmployeeSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  phone: String,
}, { versionKey: false });