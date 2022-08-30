import React, { FC, useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import { CartIcon } from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

type HeaderCartButtonProps = {
  onClick?: () => void;
};

export const HeaderCartButton: FC<HeaderCartButtonProps> = (props) => {
  const cartContext = useContext(CartContext);
  const cartTotalAmount = cartContext.items.reduce((a, c) => a + c.amount, 0);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState<boolean>(false);
  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (cartContext.items.length === 0) return;
    setBtnIsHighlighted(true);
    const refreshEffectTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(refreshEffectTimer);
    }
  }, [cartContext.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartTotalAmount}</span>
    </button>
  );
};
