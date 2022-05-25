import { Router } from 'express';
import productRouter from './productRoute';
import userRoute from './userRoute';
import orderRoute from './orderRoute';
import loginRoute from './loginRoute';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRoute);
router.use('/orders', orderRoute);
router.use('/login', loginRoute);

export default router;
