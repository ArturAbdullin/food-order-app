import React from "react";

import styles from "./Input.module.css";

type InputProps = {
  label: string;
  input: React.InputHTMLAttributes<HTMLInputElement>;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} ref={ref} />
      </div>
    );
  }
);
