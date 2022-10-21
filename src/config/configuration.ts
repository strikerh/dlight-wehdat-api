export default () => ({
  port: 3000,
  database: {
    host: process.env.DATABASE_HOST || 'sdfd',
    port: 5432,
  },
});
