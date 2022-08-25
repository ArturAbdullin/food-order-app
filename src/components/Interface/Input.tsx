import React, { FC } from "react";

import styles from "./Input.module.css";

type InputProps = {
  label: string;
  input: React.InputHTMLAttributes<HTMLInputElement>;
};

export const Input: FC<InputProps> = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};
