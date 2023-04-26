import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { CorsMiddleware } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Enable CORS
  //app.use(CorsMiddleware);
  await app.listen(3000);
}
bootstrap();
