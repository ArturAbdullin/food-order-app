import React from "react";

import styles from "./Card.module.css";

export const Card = (props: React.PropsWithChildren) => {
  return <div className={styles.card}>{props.children}</div>;
};
