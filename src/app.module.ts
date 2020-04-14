import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
/* Modules */
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/myteam',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    ),
    EmployeesModule,
  ],
})
export class AppModule {}
