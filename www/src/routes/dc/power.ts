import express, { Request } from 'express';

const app = express.Router();

app.get('/power', async (req: Request, res, next) => {
  try {
    const powers = [
      'flight', 'laser', 'super strength', 'xray vision', 'super speed',
      'invisibility', 'telekinesis', 'invulernability', 'super healing', 'fast regeneration',
      'elasticity', 'super intelligence', 'mind control', 'immortality',
    ];

    return res.status(200).send(powers[Math.floor(Math.random() * powers.length)]);
  } catch (e) {
    return next(e);
  }
});

export default app;
