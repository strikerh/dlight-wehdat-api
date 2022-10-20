import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApartmentModule } from './apartment/apartment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './apartment/entities/apartment.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApartmentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      // password: 'TsAf]UTmm%1T',
      database: 'dl_dlight',
      entities: [Apartment],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
