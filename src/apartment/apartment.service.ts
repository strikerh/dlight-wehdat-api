import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from './entities/apartment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private apartmentRepository: Repository<Apartment>,
  ) {}

  async create(createApartmentDto: CreateApartmentDto) {

    return 'this.apartmentRepository.save(createApartmentDto)';
    // return 'This action adds a new apartment';
  }

  findAll() {
    return this.apartmentRepository.find();
    // return `This action returns all apartment`;
  }

  findOne(id: number) {
    return this.apartmentRepository.findOneBy({ id });
    // return `This action returns a #${id} apartment`;
  }

  update(id: number, updateApartmentDto: UpdateApartmentDto) {
    return `This action updates a #${id} apartment`;
  }

  async remove(id: number) {
    await this.apartmentRepository.delete(id);
    // return `This action removes a #${id} apartment`;
  }
}
