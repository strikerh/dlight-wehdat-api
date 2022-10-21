import { Apartment } from '../apartment/entities/apartment.entity';

export interface Config {
  port: number;
  database: {
    user: string;
    password: string;
    port: number;
  };
}

export default () => ({
  port: Number(process.env.APP_PORT) || 0,
  database: {
    type: process.env.DATABASE_TYPE || 'mysql',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD.toString(),
    database: process.env.DATABASE_DATABASE || 'dl_dlight',
    synchronize: process.env.DATABASE_SYNCHRONIZE || true,
    entities: [Apartment],
  },
});
