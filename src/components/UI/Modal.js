import React from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.scss";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("overlays"))}
      {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("overlays"))}
    </>
  );
};

export default Modal;
