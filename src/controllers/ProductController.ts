import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/productService';

export default class ProductController {
  public service = new ProductService();

  public getAll = async (_req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(StatusCodes.OK).json(products);
  };
}
