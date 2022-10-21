export class CreateApartmentDto {
  name: string;
  price: string;
  description: string;
  images: string[];
  period: string;
  features: { icon: string; text: string; suffix: string }[];
  address?: string;
  contactNumber?: string;
  latLng?: { lat: number; lng: number };
}
