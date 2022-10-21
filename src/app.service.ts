import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): any {
    const config = this.configService.get('port');
    const config2 = this.configService.get('database');
    return {
      message: 'Server is Working!',
      data: config,
      data2: config2,
    };
  }
}
