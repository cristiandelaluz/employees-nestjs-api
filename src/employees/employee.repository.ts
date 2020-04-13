import { Injectable } from '@nestjs/common';
import { Employee } from './employee.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeRepository {
  constructor(@InjectModel('Employee') private employeeModel: Model<Employee>) {}

  find(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  create(employee: Employee): Promise<Employee> {
    return this.employeeModel.create(employee);
  }

  findById(_id: string): Promise<Employee> {
    return this.employeeModel.findById(_id).exec();
  }

  update(employee: Employee): Promise<Employee> {
    return this.employeeModel.findOneAndUpdate({ _id: employee._id }, employee, { new: true }).exec();
  }

  delete(_id: string): Promise<Employee> {
    return this.employeeModel.findByIdAndDelete({ _id: _id }).exec();
  }
}