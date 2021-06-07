import classes from "./Modal.module.css";
import {Fragment} from "react";
import ReactDom from "react-dom";

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

const portalName=document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />,portalName)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalName)}
    </Fragment>
  );
};

export default Modal;
