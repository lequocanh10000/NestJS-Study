import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Admin extends Model<Admin> {
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
}