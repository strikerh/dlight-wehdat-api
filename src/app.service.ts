import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  count = 0;

  getHello(): any {
    this.count++;
    return {
      message: 'Server is Working!',
      count: this.count,
      port: this.configService.get('port'),
      database: this.configService.get('database'),
    };
  }
}
