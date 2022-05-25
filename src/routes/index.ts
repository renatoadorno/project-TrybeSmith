import { Router } from 'express';
import productRouter from './productRoute';
import userRoute from './userRoute';
import orderRoute from './orderRoute';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRoute);
router.use('/orders', orderRoute);

export default router;
