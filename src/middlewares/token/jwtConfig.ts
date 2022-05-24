import jwt from 'jsonwebtoken';

type JwtConfig = {
  expiresIn: jwt.SignOptions['expiresIn'];
  algorithm: jwt.Algorithm;
};

const jwtConfig: JwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
} as JwtConfig;

export default jwtConfig;
