import { NextFunction, Request, Response } from 'express';

export default function errorHandling(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500);
  res.send({
    error: {
      message: err.message,
    },
  });
}
