import type { NextFunction, Request, Response } from 'express';
import IError from './interfaces';

const errorHandler = (err: IError, _req: Request, res: Response, _next: NextFunction) => {
  const { statusCode, message } = err;

  if (statusCode) {
    return res.status(statusCode).json({ message });
  }

  return res.status(500).json({
    message: 'Erro Interno',
  });
};

export default errorHandler;
