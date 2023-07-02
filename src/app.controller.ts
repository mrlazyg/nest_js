import { Controller, Get, Logger, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  @Redirect('/')
  redirect(): void {
    this.logger.warn('redirected');
  }
}
