import { Controller, Param, Body, Get, Post, Put, Delete } from "@nestjs/common";
import { EmployeeService } from './employee.service';
import { Employee } from './employee.interface';

@Controller()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async get(): Promise<Employee[]> {
    return await this.employeeService.find();
  }

  @Post()
  async create(@Body() employee: Employee): Promise<Employee> {
    return await this.employeeService.create(employee);
  }

  @Get()
  async getById(@Param() id: string): Promise<Employee> {
    return await this.employeeService.findById(id);
  }

  @Put()
  async update(@Body() employee: Employee): Promise<Employee> {
    return await this.employeeService.update(employee);
  }

  @Delete()
  async delete(@Param() id: string): Promise<Employee> {
    return await this.employeeService.delete(id);
  }
}