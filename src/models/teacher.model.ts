import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { TeacherClass } from "./teacher-class.model";

@Table
export class Teacher extends Model<Teacher> {
    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    fullName: string;

    @Column({
        allowNull: false,
        type: DataType.DATE,
    })
    dob: Date;

    @Column({
        allowNull: false,
        unique: true,
        type: DataType.DECIMAL,
    })
    personalId: number;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    address: string;

    @Column({
        allowNull: false,
        unique: true,
        type: DataType.STRING,
    })
    email: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    password: string;

    @Column({
        allowNull: false,
        unique: true,
        type: DataType.STRING,
    })
    phone: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    graduationPlace: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    expYear: string;

    // Relationship
    @HasMany(() =>TeacherClass)
    teacherClasses: TeacherClass[]
}