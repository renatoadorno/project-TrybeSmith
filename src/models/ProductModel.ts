import { ResultSetHeader } from 'mysql2/promise';
import conect from './connection';
import { IProduct, IAllProducts } from '../interfaces/product.interface';

export default class ProductModel {
  public getAll = async (): Promise<IAllProducts[]> => {
    const [product] = await conect.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return product as IAllProducts[];
  };

  public create = async (name: string, amount: string): Promise<IProduct> => {
    const [product] = await conect.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );

    return { id: product.insertId, name, amount };
  };
}
