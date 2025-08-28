import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly adminService: AdminService
    ) {}

    async validate(email: string, password: string) {
        return await this.adminService.validateAdmin(email, password);
    }
}
