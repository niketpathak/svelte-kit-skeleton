import { Request, Response, NextFunction } from 'express';

export const cacheMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const cacheControlPolicy = 'public, max-age=0'; // no-cache for now

  res.set('Cache-control', cacheControlPolicy);
  next();
};
