import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config';

async function bootstrap() {

  // TODO: Instalación de NATS, @NestJS/microservices
  // PORT: 3004 configuracion variables de entorno
  const logger = new Logger('Auth Microservice');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: envs.natsServers,
      },
    }
  );

  app.useGlobalPipes( 
    new ValidationPipe({ 
      whitelist: true, 
      forbidNonWhitelisted: true, 
    }) 
  );

  console.log('AuthMS- Testing log')
  await app.listen();
  logger.log(`Auth Microservice is running on ${envs.port}`);
}
bootstrap();
