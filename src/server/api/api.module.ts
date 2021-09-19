import { Module } from '@nestjs/common';
import { EventsGateway } from '../events/events.gateway';
import { AppController } from './api.controller';
import { AppService } from './api.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class ApiModule {}
