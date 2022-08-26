import React, { FC, useContext } from "react";
import { CartContext } from "../../../contexts/cart-context";
import { Meal } from "../../../models/meal";
import styles from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";

export const MealItem: FC<Meal> = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  const onAddToCartHandler = (amount: number) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};
