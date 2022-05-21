import conect from '../database/connection';
import IProduct from '../interfaces/product.interface';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [product] = await conect.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return product as IProduct[];
  };
}
