import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from 'src/models';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student) private readonly studentModel: typeof Student
    ) {}

    async createStudent(createStudentDto: CreateStudentDto) {
        return await this.studentModel.create(createStudentDto as any);
    }

    async findAll() {
        return await this.studentModel.findAll();
    }

    async findOne(id: number) {
        return await this.studentModel.findByPk(id);
    }
}
