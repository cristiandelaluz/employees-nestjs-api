import { Injectable } from "@nestjs/common";
import { EmployeeRepository } from './employee.repository';
import { Employee } from './employee.interface';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async find(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async create(employee: Employee): Promise<Employee> {
    return await this.employeeRepository.create(employee);
  }

  async findById(_id: string): Promise<Employee> {
    return await this.employeeRepository.findById(_id);
  }

  async update(employee: Employee): Promise<Employee> {
    return await this.employeeRepository.update(employee);
  }

  async delete(_id: string): Promise<Employee> {
    return await this.employeeRepository.delete(_id);
  }
}