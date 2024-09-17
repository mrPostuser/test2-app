import Fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const server = Fastify();

const port = process.env.PORT || 3001;

server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await server.listen({ port: Number(port) });
    console.log(`Сервер запущен на http://localhost:${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();