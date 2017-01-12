export default {
  develop: {
    mongodb: {
      host: 'localhost',
      database: 'example'
    },
    port: 8888,
  },
  production: {
    mongodb: {
      host: 'localhost',
      database: 'example-production'
    },
    port: 8888,
  },
  test: {
    mongodb: {
      host: 'localhost',
      database: 'example-test'
    },
    port: 12345
  },
};
