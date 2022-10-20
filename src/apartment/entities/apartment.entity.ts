import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  description: string;
  @Column({ type: 'json' })
  images?: string[];

  @Column()
  period: string;

  @Column({ type: 'json' })
  features?: { icon: string; text: string; suffix: string }[];

  @Column()
  address: string;

  @Column()
  contactNumber: string;

  @Column({ type: 'json' })
  latLng?: { lat: number; lng: number };
}
