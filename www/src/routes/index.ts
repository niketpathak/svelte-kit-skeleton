import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { errorMiddleware } from '../middlewares/errorMiddleware';
import { cacheMiddleware } from '../middlewares/cacheMiddleware';
import doc from './doc';
import dc from './dc';
import metadata from './metadata';

const app = express.Router();

app.use(cors());
app.use(cookieParser());
app.use(cacheMiddleware);
app.use('/api', [
  doc,
  dc,
  metadata,
]);
app.use(errorMiddleware);

export default app;
