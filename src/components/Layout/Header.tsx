import React, { FC } from "react";

import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import { HeaderCartButton } from "./HeaderCartButton";

type HeaderProps = {
  onCartButtonClick?: () => void;
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onCartButtonClick}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  );
};
