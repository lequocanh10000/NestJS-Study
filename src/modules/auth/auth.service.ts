import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly adminService: AdminService,
        private readonly jwtService: JwtService
    ) {}

    async validate(email: string, password: string) {
        return await this.adminService.validateAdmin(email, password);
    }

    async login({id, role}) {
        const accessToken = await this.jwtService.signAsync({id, role});
        return { message: 'Đăng nhập thành công', accessToken};
    }
}
