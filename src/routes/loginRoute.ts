import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import loginValidation from '../middlewares/validations/loginValidation';

const route = Router();

const controller = new LoginController();

route.post('/', loginValidation, controller.login);

export default route;
