import UserModel from '../models/UserModel';
import { createToken } from '../middlewares/token';

export default class UserService {
  public model = new UserModel();

  public create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<string> => {
    const { id } = await this.model.create(username, classe, level, password);
    return createToken(id);
  };
}
