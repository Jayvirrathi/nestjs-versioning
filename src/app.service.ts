import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloV1(): string {
    return 'Hello World from Version1!';
  }

  getHelloV2(): string {
    return 'Hello World from Version2!';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
