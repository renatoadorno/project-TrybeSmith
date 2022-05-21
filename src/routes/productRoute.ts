import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const route = Router();

const productController = new ProductController();

route.get('/', productController.getAll);

export default route;
