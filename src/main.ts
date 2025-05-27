import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocumentacion } from './documentacion';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Llama a la función que genera la documentación Swagger
  generateDocumentacion(app);

  await app.listen(3000);
}
bootstrap();
