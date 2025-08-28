import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('create')
  async createStudent(@Body() createStudentDto: CreateStudentDto) {
    return await this.studentService.createStudent(createStudentDto);
  }

  @Get('all')
  async getAllStudents() {
    return await this.studentService.findAll();
  }

  @Get('one/:id')
  async getStudentById(@Param('id') id: number) {
    return await this.studentService.findOne(id);
  }

  @Patch('update/:id')
  async update(@Body() updateStudentDto: UpdateStudentDto, @Param('id') id: number) {
    return this.studentService.update(updateStudentDto, id);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return this.studentService.delete(id);
  }
}
