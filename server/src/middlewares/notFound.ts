import { NextFunction, Request, Response } from 'express';

export default function notFound(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const error = new Error('Not Found');
  next(error);
}
