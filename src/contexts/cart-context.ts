import React from "react";
import { CartItem } from "../models/cartItem";

export type CartContextObject = {
  items: CartItem[];
  totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
};

export const CartContext = React.createContext<CartContextObject>({
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
});
