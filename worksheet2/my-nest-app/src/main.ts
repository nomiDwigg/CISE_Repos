import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  const PORT = process.env.PORT || 5000;
  console.log(`now running on http://localhost:${PORT}`);
  await app.listen(PORT);
}
bootstrap();
