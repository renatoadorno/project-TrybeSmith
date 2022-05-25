import type { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateBody = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateBody.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};

export default loginValidation;
