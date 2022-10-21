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
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
  },
});
