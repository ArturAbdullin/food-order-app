import React from "react";
import { Meal } from "../../models/meal";
import { PartialBy } from "../../models/utility";

import styles from "./Cart.module.css";

type CartItem = PartialBy<Meal, "description"> & {
  amount: number;
};

export const Cart = () => {
  const cartItems: CartItem[] = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
  ];
  const cartComponents: React.ReactNode[] = cartItems.map((item) => (
    <li>{item.name}</li>
  ));
  return (
    <div>
      <ul className={styles["cart-items"]}>{cartComponents}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
};
