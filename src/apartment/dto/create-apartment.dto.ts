import { IsArray, IsNotEmpty, IsNumber, Length } from 'class-validator';

export class CreateApartmentDto {
  // id: string;
  @IsNotEmpty()
  name: string;

  price: string;

  description: string;

  images: string[];
  period: string;

  features: { icon: string; text: string; suffix: string }[];
  address: string;
  contactNumber: string;
  latLng: { lat: number; lng: number };
}
