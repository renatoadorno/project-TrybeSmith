import type { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateBody = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const createdUserValidation = (req: Request, res: Response, next: NextFunction) => {
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

export default createdUserValidation;
