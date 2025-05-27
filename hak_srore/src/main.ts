import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP
  });



  // const config = new DocumentBuilder()
  //     .setTitle('API Documentation')
  //     .setDescription('API для вашего приложения')
  //     .setVersion('1.0')
  //     .addBearerAuth()
  //     .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api/docs', app, document);
  //
  // await app.listen(process.env.PORT ?? 4200);
}
bootstrap();