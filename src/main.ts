import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const options = new DocumentBuilder()
    .setTitle('Upwork-Patrol BE service')
    .setDescription('Upwork-Patrol BE service')
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'x-upwork-patrol-auth-token',
        in: 'header',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'upwork-patrol Access Token',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
bootstrap();
