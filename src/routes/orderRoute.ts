import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import auth from '../middlewares/auth';
import validation from '../middlewares/validations/orderValidation';

const route = Router();

const orderController = new OrderController();

route.get('/', orderController.getAll);
route.post('/', auth, validation, orderController.create);

export default route;
