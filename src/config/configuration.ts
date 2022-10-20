export const configuration = () => {
  return {
    environment: process.env.ENV_NAME,
    envName: process.env.ENV_NAME,
    isProduction: process.env.IS_PRODUCTION,
    baseUrl: process.env.BASE_URL,
    database: {
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
    },
  };
};
