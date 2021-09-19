import { Controller, Get } from '@nestjs/common';
import { EventsGateway } from '../events/events.gateway';
import { AppService } from './api.service';

@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly events: EventsGateway
  ) {}

  @Get()
  getHello(): Promise<any> {
    return this.appService.getHello(this.events);
  }
}
