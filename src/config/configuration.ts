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
  imagekit: {
    url:         process.env.IMAGEKIT_URL || 'https://upload.imagekit.io/api/v1/files/upload',
    publicKey:   process.env.IMAGEKIT_PUBLICKEY || 'public_TVLzI1Rn9bka3tXvoPx79s+gMpY=',
    privateKey:  process.env.IMAGEKIT_PRIVATEKEY || 'private_wJ9Yg4zjFOIC4nsSKKY2VWNCZXg=',
    urlEndpoint: process.env.IMAGEKIT_URLENDPOINT ||  'https://ik.imagekit.io/xMotion/',
  },

});
