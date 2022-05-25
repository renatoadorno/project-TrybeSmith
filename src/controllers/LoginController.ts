import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/loginService';

export default class LoginController {
  public service = new LoginService();

  public login = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    const { username, password } = req.body;
    try {
      const userToken = await this.service.login(username, password);

      if (!userToken) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
          message: 'Username or password invalid',
        });
      }

      return res.status(StatusCodes.OK).json({ token: userToken });
    } catch (error) {
      next(error);
    }
  };
}
