import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApartmentModule } from './apartment/apartment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './apartment/entities/apartment.entity';


@Module({
  imports: [
    ApartmentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dligahbp_wehdat_dev',
      password: 'TsAf]UTmm%1T',
      // password: 'TsAf]UTmm%1T',
      database: 'dligahbp_wehdat_dev',
      entities: [Apartment],
      synchronize: true,
      charset: 'UTF8_GENERAL_CI',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
