
import {
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway implements OnGatewayInit{
  @WebSocketServer()
  server: Server;
  
  afterInit() {
    console.log('events gateway initialized')
    this.server.emit('init', 'It\'s on!')
  }
}