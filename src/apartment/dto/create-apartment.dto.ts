import { IsArray, IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Apartment } from '../entities/apartment.entity';
import { Expose } from 'class-transformer';

export class CreateApartmentDto extends PartialType(Apartment) {
  @IsNotEmpty()
  name: string;

  price?: string;

  @IsString()
  description?: string;

  @IsArray()
  images?: string[];

  @IsString()
  period?: string;

  @IsArray()
  features?: { icon: string; text: string; suffix: string }[];

  @IsString()
  address?: string;

  @IsString()
  contactNumber?: string;

  @IsObject()
  latLng?: { lat: number; lng: number };
}
