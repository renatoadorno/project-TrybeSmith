import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/orderService';

export default class ProductController {
  public service = new OrderService();

  public getAll = async (_req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const orders = await this.service.getAll();
      return res.status(StatusCodes.OK).json(orders);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    const { newOrder } = req.body;
    try {
      const order = await this.service.getProductCreated(newOrder);
      return res.status(StatusCodes.CREATED).json(order);
    } catch (error) {
      next(error);
    }
  };
}
