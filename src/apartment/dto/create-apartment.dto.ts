import { IsNotEmpty } from 'class-validator';

export class CreateApartmentDto {
  // id: string;
  @IsNotEmpty()
  name: string;

  price: string;
}
