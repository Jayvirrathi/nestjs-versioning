import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ path: 'hello' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version('1')
  @Get('world')
  getHello1(): string {
    return this.appService.getHelloV1();
  }

  @Version('2')
  @Get('world')
  getHello2(): string {
    return this.appService.getHelloV2();
  }

  @Version(VERSION_NEUTRAL)
  @Get('world')
  getHello(): string {
    return this.appService.getHello();
  }
}
