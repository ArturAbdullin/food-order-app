import React from "react";
import React, { FC } from "react";
import { Input } from "../../Interface/Input";

import styles from "./MealItemForm.module.css";

export const MealItemForm = () => {
type MealItemFormProps = {
  id: string;
};

export const MealItemForm: FC<MealItemFormProps> = (props) => {
  return (
    <form className={styles.form}>
      <input />
      <button type="button">+ Add</button>
    </form>
  );
};
