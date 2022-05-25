import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { verifyToken } from './token';

const auth = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  const token = verifyToken(authorization);

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }

  req.body = {
    ...req.body,
    userId: token.data,
  };

  // console.log('auth:', req.body);

  next();
};

export default auth;
