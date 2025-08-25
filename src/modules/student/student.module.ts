import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from 'src/models';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [SequelizeModule.forFeature([Student])],
})
export class StudentModule {}
