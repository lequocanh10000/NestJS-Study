import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from 'src/models';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel(Admin) private readonly adminModel: typeof Admin,
    ) {}

    async findByEmail(email: string) {
        return await this.adminModel.findOne({ where: { email }});
    }
}
