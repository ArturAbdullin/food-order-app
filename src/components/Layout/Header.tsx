import React from "react";

import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  );
};
