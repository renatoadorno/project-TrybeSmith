import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import jwtConfig from './jwtConfig';

dotenv.config();

type Payload = {
  data: string;
};

const secret = process.env.JWT_SECRET || 'meusegredo';

const createToken = (userId: number) => {
  const { expiresIn, algorithm } = jwtConfig;

  const token = jwt.sign({ data: userId }, secret, { expiresIn, algorithm });

  return token;
};

const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret) as Payload;
  } catch (err) {
    return null;
  }
};

export { createToken, verifyToken };
