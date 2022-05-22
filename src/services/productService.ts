import ProductModel from '../models/ProductModel';
import IProduct from '../interfaces/product.interface';

export default class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
    return products;
  };

  public create = async (name: string, amount: string): Promise<IProduct> => {
    const product = await this.model.create(name, amount);
    return product;
  };
}
