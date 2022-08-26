import React, { FC } from "react";
import { CartIcon } from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

type HeaderCartButtonProps = {
  onClick?: () => void;
};

export const HeaderCartButton: FC<HeaderCartButtonProps> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};
