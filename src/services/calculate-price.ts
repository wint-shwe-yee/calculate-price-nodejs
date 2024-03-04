import { MenuSet } from "../data";
import { 
  MenuType,
  OrderType
} from "../types";

class PriceCalculator {
  private menus : MenuType[];
  private discountMenus : MenuSet[];

  constructor() {
    this.menus = [
      {
        menuName: MenuSet.RED,
        price: 50
      },
      {
        menuName: MenuSet.GREEN,
        price: 40
      },
      {
        menuName: MenuSet.BLUE,
        price: 30
      },
      {
        menuName: MenuSet.YELLOW,
        price: 50
      },
      {
        menuName: MenuSet.PINK,
        price: 80
      },
      {
        menuName: MenuSet.PURPLE,
        price: 90
      },
      {
        menuName: MenuSet.ORANGE,
        price: 120
      }
    ];

    this.discountMenus = [ MenuSet.ORANGE, MenuSet.PINK, MenuSet.GREEN ]
  }

  private getMenuPrice = ( menuName : MenuSet ) : MenuType => {
    return this.menus.find((menu : MenuType) => menu.menuName === menuName);
  }

  calculatePrice(orders : OrderType[], hasMemberCard : boolean): number {
    let totalPrice = 0;

    orders?.map((order : OrderType) => {
      const {
        menuName,
        quantity
      } = order;
      const menuPrice = this.getMenuPrice(menuName);
      if(!menuPrice) {
        throw new Error(`Item ${menuName} is not available in the menu.`);
      }

      const price = menuPrice.price * quantity;

      //discount for double orders
      if(this.discountMenus.includes(menuName) && quantity >= 2) {
        const discountSets = Math.floor(quantity / 2);
        const discountedPrice = price - ((discountSets * 2) * (menuPrice.price * 0.05));
        totalPrice += discountedPrice;
      } else {
        totalPrice += price;
      }
    });

    // 10% discount for members
    if (hasMemberCard) {
      totalPrice *= 0.9;
    }

    return totalPrice;
  }
}

export default PriceCalculator;