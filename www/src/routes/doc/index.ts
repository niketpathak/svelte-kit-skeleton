import express, { Request } from 'express';

const app = express.Router();

app.get('/', async (req: Request, res, next) => {
  try {
    return res.status(200).send(`
  <h2>API Up and Running!</h2><br>
  Routes available -
  <ul>
    <li><pre>/api/dc/heroes</pre></li>
    <li><pre>/api/dc/powers</pre></li>
    <li><pre>/api/metadata</pre></li>
  </ul>
  `);
  } catch (e) {
    return next(e);
  }
});

export default app;
