import { ResultSetHeader } from 'mysql2/promise';
import conect from './connection';
import { IOrder, GetOrder, ICreateOrder } from '../interfaces/order.interface';

export default class OrderModel {
  public getAll = async (): Promise<IOrder[]> => {
    const [orders] = await conect.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    return orders as IOrder[];
  };

  public create = async ({
    userId,
    productsIds,
  }: ICreateOrder): Promise<GetOrder & ICreateOrder> => {
    const [orders] = await conect.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return { id: orders.insertId, userId, productsIds };
  };
}
