import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

export function generateDocumentacion(app) {
  /** Genera una documentacion para el servicio */
  const mainMod = new DocumentBuilder()
    .setTitle('PagoIzi API')
    .setDescription('Interface de la API de FibraNet')
    .setVersion(process.env.APP_VERSION || '')
    .build();

  const mainDocument = SwaggerModule.createDocument(app, mainMod, {
    include: [AppModule],
  });

  SwaggerModule.setup(
    (process.env.PREFIX ? process.env.PREFIX : '') + '/docs',
    app,
    mainDocument,
  );
}
