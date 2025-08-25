import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  const configService = new ConfigService();
  const port = configService.get<string>('PORT') || 4002;

  logger.log(`Server starts on port ${port}`);
  await app.listen(port);
}
bootstrap();
