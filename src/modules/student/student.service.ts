import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from 'src/models';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student) private readonly studentModel: typeof Student
    ) {}

    async createStudent(createStudentDto: CreateStudentDto) {
        const emailExists = await this.studentModel.findOne({
            where: { email: createStudentDto.email},
        })
        const phoneExists = await this.studentModel.findOne({
            where: { phone: createStudentDto.phone},
        })
        if(emailExists || phoneExists) throw new BadRequestException('Email hoặc mật khẩu đã tồn tại');
        await this.studentModel.create(createStudentDto as any);
        return {
            message: 'Tạo học sinh thành công',
        };
    }

    async findAll() {
        return await this.studentModel.findAll({
            order: [['fullName', 'ASC']],
            attributes: { exclude: ['createdAt', 'updatedAt']}
        });
    }

    async findOne(id: number) {
        return await this.studentModel.findOne({
            where: {id: id},
            attributes: { exclude: ['createdAt', 'updatedAt']}
        });
    }

    async update(updateStudentDto: UpdateStudentDto, id: number) {
        const alreadyExists = await this.studentModel.findByPk(id);
        if(!alreadyExists) throw new BadRequestException('Không tìm thấy học sinh');
        const updated = await this.studentModel.update(updateStudentDto, { where: {id }});
        const message = updated[0] > 0 ? 'Thông tin học sinh được cập nhật thành công' : 'Cập nhật thông tin học sinh không thành công';
        return { message}
    }

    async delete (id: number) {
        await this.studentModel.destroy({ where: { id}, cascade: true });
        return {message: 'Xoá thông tin học sinh thành công'};
    }
}
