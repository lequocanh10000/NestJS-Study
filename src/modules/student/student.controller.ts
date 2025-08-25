import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';

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
  async getStudentById(@Param('id', ParseIntPipe) id: number) {
    return await this.studentService.findOne(id);
  }
}
