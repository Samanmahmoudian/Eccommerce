import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.use(express.urlencoded({extended:true}))
  app.use(express.json())
  app.use('/Pics', express.static('Pics'))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
