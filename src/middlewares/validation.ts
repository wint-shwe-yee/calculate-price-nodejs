import {
  Request, Response, NextFunction
} from "express";
import Validator from "validatorjs";


export const getPriceValidator = (req: Request, res: Response, next: NextFunction) => {
  const validationRules = {
    "order": "required|array",
    "order.*.menuName": "required|string",
    "order.*.quantity": "required|integer",
    "hasMemberCard" : "required|boolean"
  };

  const data = req.body;
  const validator = new Validator(data, validationRules);
  if (validator.fails()) {
    const errors = validator.errors.all();
    return res.status(400).json({ errors });
  }
  next();
}