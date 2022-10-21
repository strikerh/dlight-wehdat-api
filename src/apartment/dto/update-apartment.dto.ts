import { PartialType } from '@nestjs/mapped-types';
import { CreateApartmentDto } from './create-apartment.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateApartmentDto extends PartialType(CreateApartmentDto) {
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
