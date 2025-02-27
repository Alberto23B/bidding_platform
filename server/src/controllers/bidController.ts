import { NextFunction, Request, Response } from 'express';
import { calculateBasePrice } from '../lib/calculateBasePrice';

export default function bidController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = calculateBasePrice(req.body);
  res.json({ result: result, status: 200, details: 'Success' });
}
