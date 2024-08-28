import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './database/prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks();
  
  app.useGlobalPipes(new ValidationPipe()); 

  const options = new DocumentBuilder()
  .setTitle('Swagger 문서 제목입니다.')
  .setDescription('Swagger 문서 설명입니다.')
  .setVersion('Swagger 문서 버전입니다.')
  .build();

const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('/api-docs', app, document);
  
  await app.listen(5000);
}
bootstrap();
