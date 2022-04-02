import { DefaultEventsMap } from '@socket.io/component-emitter';
import { io, Socket } from 'socket.io-client';

class SocketioService {
    socket!: Socket<DefaultEventsMap, DefaultEventsMap>;
    constructor() {}
  
    setupSocketConnection() {
      this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    }
  }
  
  export default new SocketioService();