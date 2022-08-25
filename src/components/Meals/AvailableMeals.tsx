import React from "react";
import { DUMMY_MEALS } from "../../data/dummy-meals";

import styles from "./AvailableMeals.module.css";

export const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};
