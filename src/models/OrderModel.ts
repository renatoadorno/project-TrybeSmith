// import { ResultSetHeader } from 'mysql2/promise';
import conect from './connection';
import { IOrder } from '../interfaces/order.interface';

export default class OrderModel {
  public getAll = async (): Promise<IOrder[]> => {
    const [orders] = await conect.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    return orders as IOrder[];
  };
}
