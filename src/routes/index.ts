import { Router } from 'express';
import productRouter from './productRoute';
import userRoute from './userRoute';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRoute);

export default router;
