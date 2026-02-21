import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import * as os from 'os';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      service: 'nestjs-app'
    };
  }

  @Get('hello')
  sayHello() {
    return {
      message: 'Hello from NestJS',
      hostname: os.hostname()
    };
  }

  @Get('users/:id')
  getUser(@Param('id') id: string) {
    return {
      id,
      name: 'Sample User',
      role: 'Developer'
    };
  }
}
