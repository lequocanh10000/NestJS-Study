import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";

export class CreateStudentDto {
    @IsString({message: 'Tên phải là chuỗi'})
    @IsNotEmpty({ message: 'Không được bỏ trống'})
    fullName: string;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty({ message: 'Không được bỏ trống'})
    dob: Date;

    @IsString()
    @IsNotEmpty({ message: 'Không được bỏ trống'})
    address: string;

    @IsString()
    @IsNotEmpty({ message: 'Không được bỏ trống'})
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'Không được bỏ trống'})
    phone: string;
}