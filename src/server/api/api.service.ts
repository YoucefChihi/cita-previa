import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer'
import { EventsGateway } from '../events/events.gateway';

@Injectable()
export class AppService {
  async getHello(
    events: EventsGateway
  ): Promise<any> {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('https://example.com');
      await page.screenshot({ path: 'example.png' });
      const title = await page.title()
      await browser.close();
      events.server.emit('retry', title)
      return {message: title};
  }
}
