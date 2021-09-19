import { Module } from '@nestjs/common';

import { ApiModule } from 'src/server/api/api.module';
import { ViewModule } from 'src/server/view/view.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [ApiModule, ViewModule, EventsModule],
})
export class ServerModule {}