import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminModule } from '../admin/admin.module';
import { LocalStrategy } from './strategies/local.strategy';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
  imports: [AdminModule]
})
export class AuthModule {}
