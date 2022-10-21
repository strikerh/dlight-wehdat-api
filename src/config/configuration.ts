export default () => ({
  port: process.env.APP_PORT,
  database: {
    host: process.env.DATABASE_USER || 'sdfd',
    port: 5432,
  },
});
