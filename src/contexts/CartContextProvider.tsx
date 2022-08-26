import React, { FC } from "react";
import { CartItem } from "../models/cartItem";
import { CartContextObject, CartContext } from "./cart-context";

type CartContextProviderProps = {} & React.PropsWithChildren;

export const CartContextProvider: FC<CartContextProviderProps> = (props) => {
  const addItemToCartHandler = (item: CartItem) => {};

  const removeItemFromCartHandler = (id: string) => {};

  const cartContext: CartContextObject = {
    items: [],
    totalPrice: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
