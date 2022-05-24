import { ResultSetHeader } from 'mysql2/promise';
import conect from './connection';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  public create = async (username: string, classe: string, level: number, password: string):
  Promise<IUser> => {
    const [user] = await conect.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, password, classe, level) VALUES (?, ?, ?, ?)',
      [username, password, classe, level],
    );

    return { id: user.insertId, username, classe, level, password };
  };
}
