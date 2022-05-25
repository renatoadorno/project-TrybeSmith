import type { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateBody = Joi.object({
  userId: Joi.number(),
  productsIds: Joi.array().items(Joi.number()).min(1).required(),
});

const orderValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateBody.validate(req.body);

  if (error) {
    const [{ message }] = error.details;

    if (message.includes('is required')) {
      return res.status(400).json({ message: error.details[0].message });
    }

    if (message.includes('must contain at least 1 items')) {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }

    return res.status(422).json({ message: error.details[0].message });
  }

  req.body.newOrder = {
    userId: Number(req.body.userId),
    productsIds: req.body.productsIds,
  };

  // console.log('valid:', req.body.newOrder);

  next();
};

export default orderValidation;
