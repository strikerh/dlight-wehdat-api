import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apartment } from './entities/apartment.entity';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private apartmentRepository: Repository<Apartment>,
  ) {}

  create(createApartmentDto: CreateApartmentDto) {
    const sdf = this.apartmentRepository.create();
    sdf.name = createApartmentDto.name;
    sdf.description = createApartmentDto.description;
    sdf.price = Number(createApartmentDto.price.replace(',', ''));
    sdf.period = createApartmentDto.period;
    sdf.address = createApartmentDto.address;
    sdf.contactNumber = createApartmentDto.contactNumber;
    sdf.images = createApartmentDto.images;
    sdf.features = createApartmentDto.features;
    sdf.latLng = createApartmentDto.latLng;
    return this.apartmentRepository.save(sdf);
  }

  findAll() {
    return `This action returns all apartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apartment`;
  }

  update(id: number, updateApartmentDto: UpdateApartmentDto) {
    return `This action updates a #${id} apartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartment`;
  }
}
