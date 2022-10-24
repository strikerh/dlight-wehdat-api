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
    const apartment = this.apartmentRepository.create(createApartmentDto);
    return this.apartmentRepository.save(apartment);
  }

  uploadImages(){

  }

  findAll() {
    return this.apartmentRepository.find();
  }

  findOne(id: number) {
    return this.apartmentRepository.findOneBy({ id });
  }

  async update(id: number, updateApartmentDto: UpdateApartmentDto) {
    return this.apartmentRepository.update(id, updateApartmentDto);
  }

  remove(id: number) {
    return this.apartmentRepository.delete(id);
  }
}
