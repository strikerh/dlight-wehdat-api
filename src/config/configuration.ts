export default () => ({
  port: 3000,
  database: {
    host: process.env.DATABASE_USER || 'sdfd',
    port: 5432,
  },
});
