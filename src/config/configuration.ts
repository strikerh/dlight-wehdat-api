export default () => ({
  port: process.env.APP_PORT,
  database: {
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
  },
});
