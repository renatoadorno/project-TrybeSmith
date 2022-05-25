import OrderModel from '../models/OrderModel';
import ProductModel from '../models/ProductModel';
import { GetOrder } from '../interfaces/order.interface';

export default class OrderService {
  public orderModel = new OrderModel();

  public productModel = new ProductModel();

  // orderId precisa ser igual ao id de orders para ser exibido o productsIds correto
  public getAll = async (): Promise<GetOrder[]> => {
    const orders = await this.orderModel.getAll();
    const products = await this.productModel.getAll();

    const orderReturn = orders.map(({ id, userId }) => ({
      id,
      userId,
      productsIds: products.filter(({ orderId }) => orderId === id)
        .map((p) => p.id),
    }));

    return orderReturn;
  };
}
