import { Router } from 'express';
import UserController from '../controllers/UserController';
import userValidation from '../middlewares/validations/userValidation';

const route = Router();

const userController = new UserController();

route.post('/', userValidation, userController.create);

export default route;
