import { Router } from 'express';
import OrderController from '../controllers/OrderController';
// import productValidation from '../middlewares/validations/productValidation';

const route = Router();

const orderController = new OrderController();

route.get('/', orderController.getAll);

export default route;
