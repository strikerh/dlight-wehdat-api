import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  price: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  description: string;

  @Column({
    nullable: true,
  })
  period: string;

  @Column({
    nullable: true,
  })
  address?: string;

  @Column({
    nullable: true,
  })
  contactNumber?: string;

  @Column({
    type: 'simple-array',
    nullable: true,
  })
  images: string[];

  @Column({
    type: 'json',
    nullable: true,
  })
  features: { icon: string; text: string; suffix: string }[];

  @Column({
    type: 'json',
    nullable: true,
  })
  latLng?: { lat: number; lng: number };
}
