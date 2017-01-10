export default {
  develop: {
    mongodb: {
      host: 'localhost',
      database: 'express-rest-api',
      user: 'user',
      password: 'password'
    },
    port: 8888,
  },
  production: {
    mongodb: {
      host: 'localhost',
      database: 'express-rest-api',
      user: 'user',
      password: 'password'
    },
    port: 8888,
  },
  test: {
    mongodb: {
      host: 'localhost',
      database: 'express-rest-api-test',
      user: 'user',
      password: 'password',
    },
    port: 12345
  },
};
