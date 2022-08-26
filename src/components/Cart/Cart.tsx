import React, { FC, useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { Modal } from "../Interface/Modal";

import styles from "./Cart.module.css";

type CartProps = {
  onClose: () => void;
};

export const Cart: FC<CartProps> = (props) => {
  const cartContext = useContext(CartContext);
  const cartComponents: React.ReactNode[] = cartContext.items.map((item) => (
    <li>{item.name}</li>
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
