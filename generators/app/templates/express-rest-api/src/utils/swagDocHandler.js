import path from 'path';
import swagger from 'swagger-jsdoc';

export default async function swaggerDoc(req, res) {
  // swagger definition
  const swaggerDefinition = {
    info: {
      title: 'EXPRESS REST API DOC',
      version: '1.0.0',
      description: 'EXPRESS REST API DOC',
    }
  };
  const options = {
    swaggerDefinition,
    apis: [path.resolve('src/routes/**/*.js'), path.resolve('src/models/**/*.js')],
  };

  const swaggerSpec = swagger(options);
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
}
