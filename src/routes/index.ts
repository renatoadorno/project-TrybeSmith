import { Router } from 'express';

import productRouter from './productRoute';

const router = Router();

router.use('/products', productRouter);

export default router;
