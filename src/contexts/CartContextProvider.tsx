import React, { FC, useReducer } from "react";
import { CartItem } from "../models/cartItem";
import { CartReducer, CartState } from "../models/cartReducer";
import { CartContextObject, CartContext } from "./cart-context";

const cartInitialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer: CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return {
        items: state.items.concat(action.payload),
        totalPrice:
          state.totalPrice + action.payload.price * action.payload.amount,
      };
  }
  return state;
};

type CartContextProviderProps = {} & React.PropsWithChildren;

export const CartContextProvider: FC<CartContextProviderProps> = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    cartInitialState
  );

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", payload: item });
  };

  const removeItemFromCartHandler = (id: string) => {};

  const cartContext: CartContextObject = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};