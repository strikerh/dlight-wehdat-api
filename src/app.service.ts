import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): any {
    const config = this.configService.get('port');
    return {
      message: 'Server is Working!',
      data: config,
    };
  }
}
