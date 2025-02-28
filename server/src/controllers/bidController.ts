import { NextFunction, Request, Response } from 'express';
import { calculateBasePrice } from '../lib/calculateBasePrice';

export default function bidController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = calculateBasePrice(req.body);
  if (result.limitReached) {
    res.json({
      result: result.base,
      status: 200,
      details: 'Success',
      limitReached: true,
    });
  } else {
    res.json({
      result: result.base,
      status: 200,
      details: 'Success',
      limitReached: false,
    });
  }
}
