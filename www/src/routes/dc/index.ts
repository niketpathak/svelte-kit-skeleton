import express from 'express';
import heroes from './heroes';
import power from './power';

const app = express.Router();

app.use('/dc', [heroes, power]);

export default app;
