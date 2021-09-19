import { NestFactory } from '@nestjs/core';
import { ServerModule } from 'src/server/server.module';
import { PORT } from './config';


async function bootstrap() {
  const app = await NestFactory.create(ServerModule);
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
