import { DateRequired, StringRequired } from "src/common/decorators";

export class CreateStudentDto {
    @StringRequired('Họ và tên')
    fullName: string;

    @DateRequired('Ngày sinh')
    dob: Date;

    @StringRequired('Địa chỉ')
    address: string;

    @StringRequired('Email')
    email: string;

    @StringRequired('Số điện thoại')
    phone: string;
}