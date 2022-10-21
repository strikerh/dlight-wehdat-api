import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): any {

    return {
      message: 'Server is Working!',
      port: this.configService.get('port'),
      database: this.configService.get('database'),
    };
  }
}
