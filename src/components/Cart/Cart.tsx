import React, { FC, useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { Modal } from "../Interface/Modal";
import { CartItem } from "../../models/cartItem";
import { CartListItem } from "./CartListItem";

import styles from "./Cart.module.css";

type CartProps = {
  onClose: () => void;
};

export const Cart: FC<CartProps> = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item: CartItem) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartComponents: React.ReactNode[] = cartContext.items.map((item) => (
    <CartListItem
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));
  const totalPrice = `$${cartContext.totalPrice.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  return (
    <Modal onBackdropClick={props.onClose}>
      <ul className={styles["cart-items"]}>{cartComponents}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};
