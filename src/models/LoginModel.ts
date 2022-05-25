import conect from './connection';
import IUser from '../interfaces/user.interface';

export default class LoginModel {
  public getByUsername = async (username: string): Promise<IUser> => {
    const [users] = await conect.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [username],
    );
    
    const [user] = users as IUser[];
    return user;
  };
}
