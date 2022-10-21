import { IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Apartment } from '../entities/apartment.entity';

export class CreateApartmentDto extends PartialType(Apartment) {
  @IsNotEmpty()
  name: string;
  price?: string;
  description?: string;
  images?: string[];
  period?: string;
  features?: { icon: string; text: string; suffix: string }[];
  address?: string;
  contactNumber?: string;
  latLng?: { lat: number; lng: number };
}
