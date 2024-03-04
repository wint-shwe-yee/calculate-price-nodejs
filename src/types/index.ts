import { MenuSet } from "../data";

export type MenuType = {
  menuName : MenuSet,
  price : number
}

export type OrderType = {
  menuName : MenuSet,
  quantity : number
}

export type OrderBodyType = {
  order : OrderType[],
  hasMemberCard : boolean
}
