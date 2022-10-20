import { IsArray, IsNotEmpty, IsNumber, Length } from 'class-validator';

export class CreateApartmentDto {
  // id: string;
  @IsNotEmpty()
  @Length(3, 255)
  name: string;

  price: string;

  @IsNotEmpty()
  description: string;

  @IsArray()
  images: string[];
  period: string;

  @IsArray()
  features: { icon: string; text: string; suffix: string }[];
  address: string;
  contactNumber: string;
  latLng: { lat: number; lng: number };
}
