import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ConfigService } from '@nestjs/config';

@Controller('v1/apartment')
export class ApartmentController {
  constructor(
    private readonly apartmentService: ApartmentService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentService.create(createApartmentDto);
  }

  @Get()
  findAll() {
    return this.apartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
     return { df: this.configService.get('database') };
    // return this.apartmentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApartmentDto: UpdateApartmentDto,
  ) {
    return this.apartmentService.update(+id, updateApartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentService.remove(+id);
  }
}
