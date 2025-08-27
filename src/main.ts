import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/response.interceptor';
import { AllExceptionFilter } from './common/filter/all-expection.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  const configService = new ConfigService();

  app.useGlobalPipes(
    new ValidationPipe(
      { whitelist: true,  // xóa các field dư thừa trong payload
        forbidNonWhitelisted: true, // báo lỗi dư thừa field không cần thiết
        transform: true, // chuyển payload thành instance dto
        transformOptions: { enableImplicitConversion: true}, // cho phép transform dữ liệu của field
      }
    ));
  
  app.useGlobalInterceptors(new TransformInterceptor);

  app.useGlobalFilters(new AllExceptionFilter);

  const port = configService.get<string>('PORT') || 4002;

  logger.log(`Server starts on port ${port}`);
  await app.listen(port);
}
bootstrap();
