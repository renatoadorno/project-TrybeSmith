import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import productValidation from '../middlewares/validations/productValidation';

const route = Router();

const productController = new ProductController();

route.get('/', productController.getAll);
route.post('/', productValidation, productController.create);

export default route;
