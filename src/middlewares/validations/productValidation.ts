import type { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const MIN_LENGTH = 3;

const validateBody = Joi.object({
  name: Joi.string().min(MIN_LENGTH).required(),
  amount: Joi.string().min(MIN_LENGTH).required(),
});

const createdProductValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateBody.validate(req.body);

  if (error) {
    const [{ message }] = error.details;

    if (message.includes('is required')) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    return res.status(422).json({
      message: error.details[0].message,
    });
  }

  next();
};

export default createdProductValidation;
