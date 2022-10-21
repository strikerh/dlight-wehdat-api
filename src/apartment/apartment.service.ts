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
    const apartment = this.apartmentRepository.create();
    apartment.name = createApartmentDto.name;
    apartment.description = createApartmentDto.description;
    apartment.price = Number(createApartmentDto.price.replace(',', ''));
    apartment.period = createApartmentDto.period;
    apartment.address = createApartmentDto.address;
    apartment.contactNumber = createApartmentDto.contactNumber;
    apartment.images = createApartmentDto.images;
    apartment.features = createApartmentDto.features;
    apartment.latLng = createApartmentDto.latLng;
    return this.apartmentRepository.save(apartment);
  }

  findAll() {
    return this.apartmentRepository.find();
  }

  findOne(id: number) {
    return this.apartmentRepository.findOneBy({ id });
  }

  update(id: number, updateApartmentDto: UpdateApartmentDto) {
    return `This action updates a #${id} apartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartment`;
  }
}
