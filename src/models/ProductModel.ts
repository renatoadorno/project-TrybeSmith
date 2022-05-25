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

  public getById = async (id: number): Promise<IProduct> => {
    const [products] = await conect.execute(
      'SELECT * FROM Trybesmith.Products WHERE id = ?',
      [id],
    );

    const [product] = products as IProduct[];
    return product;
  };

  public updateOrder = async (id: number, orderId: number): Promise<IProduct> => {
    const [{ insertId }] = await conect.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, id],
    );

    const product = await this.getById(insertId);
    return product as IProduct;
  };
}
