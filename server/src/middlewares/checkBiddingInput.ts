import { NextFunction, Request, RequestHandler, Response } from 'express';

export const checkBiddingInput: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!checkParameters(req.body)) {
    res.json({
      status: 400,
      message: 'Please insert all parameters',
    });
    return;
  }

  next();
};

const checkParameters = ({
  base,
  minStep,
  maxStep,
  threshold,
}: {
  base: number;
  minStep: number;
  maxStep: number;
  threshold: number;
}) => {
  if (base <= 0 || minStep <= 0 || maxStep <= 0 || threshold <= 0) {
    return false;
  }
  return true;
};
