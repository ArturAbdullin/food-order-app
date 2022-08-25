import React, { FC } from "react";
import { Input } from "../../Interface/Input";

import styles from "./MealItemForm.module.css";

type MealItemFormProps = {
  id: string;
};

export const MealItemForm: FC<MealItemFormProps> = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="button">+ Add</button>
    </form>
  );
};
