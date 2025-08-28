import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";


export const StringRequired = (name: string) => applyDecorators(
    ApiProperty({ required: true}),
    IsString({message: `${name} phải là chuỗi`}),
    IsNotEmpty({ message: `${name} không được bỏ trống`})
)

export const DateRequired = (name: string) => applyDecorators(
    ApiProperty({ required: true}),
    Type(() => Date),
    IsDate({message: `${name} phải có dạng YYY-MM-DD`}),
    IsNotEmpty({ message: `${name} không được bỏ trống`})
)