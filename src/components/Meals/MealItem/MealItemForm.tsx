import React, { FC, useRef } from "react";
import { Input } from "../../Interface/Input";

import styles from "./MealItemForm.module.css";

type MealItemFormProps = {
  id: string;
  onAddToCart?: (amount: number) => void;
};

export const MealItemForm: FC<MealItemFormProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    props.onAddToCart?.(+inputRef.current!.value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        ref={inputRef}
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
      <button>+ Add</button>
    </form>
  );
};
