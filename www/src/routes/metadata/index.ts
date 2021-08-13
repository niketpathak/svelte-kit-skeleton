import express, { Request } from 'express';

const app = express.Router();

app.get('/metadata', async (req: Request, res, next) => {
  try {
    return res.status(200).send({
      seo: {
        title: 'Dummy Page Title',
        description: 'Dummy Page Description',
      },
    });
  } catch (e) {
    return next(e);
  }
});

export default app;
