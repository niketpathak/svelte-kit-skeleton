import { Request, Response, NextFunction } from 'express';

interface HasResponse {
  response?: {
    status?: number;
  };
}

type ErrorMiddleware = (
  error: HasResponse,
  req: Request,
  res: Response,
  next: NextFunction,
) => Response;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorMiddleware: ErrorMiddleware = (error, req, res, next) => {
  const message = 'Internal server error';
  const status = error.response?.status || 500;

  return res.status(status).send({
    message,
    status,
  });
};
