import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHeals(): { aliveTime: number; status: string } {
    return {
      aliveTime: process.uptime(),
      status: 'STARTED',
    };
  }
}
