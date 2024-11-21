import { APIGatewayProxyHandler } from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  console.log('This is a Test Lambda Function');
  return {
    statusCode: 200,
    body: "Hello World From Test Lambda Function!"
  };
};

