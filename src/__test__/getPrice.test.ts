import {
  expect,
  test
} from "@jest/globals";
import PriceCalculator from "../services/calculate-price";
import { OrderType } from "../types";
import { MenuSet } from "../data";

const priceCalculator = new PriceCalculator();

test("Order red and green set without memeber card", () => {
  const order : OrderType[] = [
    {
      "menuName" : MenuSet.RED,
      "quantity" : 1
    },
    {
      "menuName" : MenuSet.GREEN,
      "quantity" : 1
    }
  ]
  const totalPrice = priceCalculator.calculatePrice(order, false);
  expect(totalPrice).toBe(90);
});

test("Order red and green set with member card", () => {
  const order : OrderType[] = [
    {
      "menuName" : MenuSet.RED,
      "quantity" : 1
    },
    {
      "menuName" : MenuSet.GREEN,
      "quantity" : 1
    }
  ]
  const totalPrice = priceCalculator.calculatePrice(order, true);
  expect(totalPrice).toBe(81);
});

test("Order multiple orange sets without member card", () => {
  const order : OrderType[] = [
    {
      "menuName" : MenuSet.ORANGE,
      "quantity" : 5
    }
  ]
  const totalPrice = priceCalculator.calculatePrice(order, false);
  expect(totalPrice).toBe(576);
});
