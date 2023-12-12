import * as Path from 'node:path';
import express from 'express';
import gamesRoutes from './routes/games';

const server = express();

server.use(express.json());

server.use('/api/v1/PCGamesCollection', gamesRoutes);

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')));
  server.use('/assets', express.static(Path.resolve('./dist/assets')));
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'));
  });

  // Error handling for production
  server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });
}

// Error handling for development
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

export default server;
