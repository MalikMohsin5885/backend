import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS directly with NestJS
  app.enableCors({
    origin: '*', // You can restrict this to specific origins
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  // Handle preflight requests
  // app.use((req, res, next) => {
  //   if (req.method === 'OPTIONS') {
  //     res.sendStatus(204);
  //   } else {
  //     next();
  //   }
  // });

  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
