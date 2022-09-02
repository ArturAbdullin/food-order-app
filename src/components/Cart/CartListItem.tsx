import React, { FC } from "react";
import { CartItem } from "../../models/cartItem";

import styles from "./CartListItem.module.css";

type CartListItemProps = CartItem & {
  onAdd: () => void;
  onRemove: () => void;
  onClear: () => void;
};

export const CartListItem: FC<CartListItemProps> = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
        <button className={styles.trash} onClick={props.onClear}/>
      </div>
    </li>
  );
};
