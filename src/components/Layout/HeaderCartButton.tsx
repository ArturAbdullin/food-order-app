import React, { FC, useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { CartIcon } from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

type HeaderCartButtonProps = {
  onClick?: () => void;
};

export const HeaderCartButton: FC<HeaderCartButtonProps> = (props) => {
  const cartContext = useContext(CartContext);
  const cartTotalAmount = cartContext.items.reduce((a, c) => a + c.amount, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartTotalAmount}</span>
    </button>
  );
};
