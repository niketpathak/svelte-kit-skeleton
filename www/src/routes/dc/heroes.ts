import express, { Request } from 'express';

const app = express.Router();

app.get('/heroes', async (req: Request, res, next) => {
  try {
    return res.status(200).send(['Superman', 'Iron-man']);
  } catch (e) {
    return next(e);
  }
});

export default app;
