import React, { FC } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

type ModalProps = {
  onBackdropClick?: () => void;
} & React.PropsWithChildren;

const Backdrop: FC<ModalProps> = (props) => {
  return <div className={styles.backdrop} onClick={props.onBackdropClick} />;
};

const ModalOverlay: FC<ModalProps> = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

export const Modal: FC<ModalProps> = (props) => {
  const portalElement = document.getElementById("overlays") as HTMLElement;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onBackdropClick={props.onBackdropClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
