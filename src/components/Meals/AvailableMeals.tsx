import React from "react";
import { DUMMY_MEALS } from "../../data/dummy-meals";
import { Card } from "../Interface/Card";
import { MealItem } from "./MealItem/MealItem";

import styles from "./AvailableMeals.module.css";

export const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
