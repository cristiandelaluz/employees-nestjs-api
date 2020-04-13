import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
  matricule: String,
  name: String,
  lastName: String,
  email: String,
  phone: String,
});