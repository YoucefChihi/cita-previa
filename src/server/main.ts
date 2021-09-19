import { NestFactory } from '@nestjs/core';
import { ServerModule } from 'src/server/server.module';


async function bootstrap() {
  const app = await NestFactory.create(ServerModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
