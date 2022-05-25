import OrderModel from '../models/OrderModel';
import ProductModel from '../models/ProductModel';
import { GetOrder, ICreateOrder } from '../interfaces/order.interface';

interface IRequest {
  userId: number;
  productsIds: number[];
}

export default class OrderService {
  public order = new OrderModel();

  public product = new ProductModel();

  // orderId precisa ser igual ao id de orders para ser exibido o productsIds correto
  public getAll = async (): Promise<GetOrder[]> => {
    const orders = await this.order.getAll();
    const products = await this.product.getAll();

    const orderReturn = orders.map(({ id, userId }) => ({
      id,
      userId,
      productsIds: products.filter(({ orderId }) => orderId === id).map((p) => p.id),
    }));

    return orderReturn;
  };

  public create = async (createOrder: IRequest): Promise<ICreateOrder> => {
    const newOrder = await this.order.create(createOrder);

    await Promise.all(
      newOrder.productsIds.map(async (productId) =>
        this.product.updateOrder(productId, newOrder.id)),
    );

    return newOrder;
  };

  public getProductCreated = async (newOrder: IRequest): Promise<ICreateOrder> => {
    const { userId, productsIds } = await this.create(newOrder);

    return { userId, productsIds };
  };
}
