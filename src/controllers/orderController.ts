import PriceCalculator from "../services/calculate-price";
import {
  Request, Response
} from "express";
import { 
  OrderBodyType
} from "../types";

interface CustomRequest<T> extends Request {
  body: T
}

interface OrderPriceResponse extends Response {
  totalPrice : number
}

exports.calculatePrice = (req : CustomRequest<OrderBodyType>, res : OrderPriceResponse) => {
  const bodyData = req.body;
  const priceCalculator = new PriceCalculator();
  const totalPrice = priceCalculator.calculatePrice(bodyData.order, bodyData.hasMemberCard);

  return res.status(200).json({ totalPrice });
};