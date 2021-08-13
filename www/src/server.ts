import express from 'express';
import routes from './routes/index';
import config from './config.json';

const app = express();
const { port } = config;

app.use(routes);

app.get('/', (req, res) => {
  res.send(`Hello! The API is located at ${config.prefixApi}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
