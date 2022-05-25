import LoginModel from '../models/LoginModel';
import IUser from '../interfaces/user.interface';
import { createToken } from '../middlewares/token';

export default class LoginService {
  public model = new LoginModel();

  public findUser = async (username: string): Promise<IUser | null> => {
    const user = await this.model.getByUsername(username);

    return user || null;
  };

  public login = async (username: string, password: string): Promise<string | null> => {
    const user = await this.findUser(username);

    if (!user || user.password !== password) {
      return null;
    }

    return createToken(user.id);
  };
}
