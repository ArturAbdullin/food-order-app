import { CartContextObject } from "../contexts/cart-context";
import { CartItem } from "./cartItem";

export type CartState = Pick<CartContextObject, "items" | "totalPrice">;

type CartActionCommon = {
  type: string;
};

type CartActionAddItem = CartActionCommon & {
  type: "ADD_CART_ITEM";
  payload: CartItem;
};

type CartActionRemoveItem = CartActionCommon & {
  type: "REMOVE_CART_ITEM";
  id: string;
};

type CartActionClearItem = CartActionCommon & {
  type: "CLEAR_CART_ITEM";
  id: string;
};

export type CartAction =
  | CartActionAddItem
  | CartActionRemoveItem
  | CartActionClearItem;

export type CartReducer = (state: CartState, action: CartAction) => CartState;
