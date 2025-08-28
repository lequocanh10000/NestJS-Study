import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminModule } from '../admin/admin.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [AdminModule]
})
export class AuthModule {}
