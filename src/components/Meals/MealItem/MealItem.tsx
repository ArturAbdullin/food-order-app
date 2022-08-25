import React, { FC } from "react";
import { Meal } from "../../../models/meal";
import styles from "./MealItem.module.css";

export const MealItem: FC<Meal> = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </li>
  );
};
