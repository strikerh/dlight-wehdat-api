export const configuration = () => {
  return {
    environment: 'production',
    envName: 'production',
    isProduction: true,
    baseUrl: 'process.env.BASE_URL',
    database: {
      type: 'mysql',
      host: 'localhost',
      port: '3306',
      username: 'dligahbp_wehdat_dev',
      password: 'TsAf]UTmm%1T',
      database: 'dligahbp_wehdat_dev',
    },
  };
};
