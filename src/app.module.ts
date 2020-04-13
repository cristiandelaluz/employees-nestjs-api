import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* Modules */
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    EmployeesModule,
    MongooseModule.forRoot('mongo://localhost/employees-nestjs')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
