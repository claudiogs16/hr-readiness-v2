import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const Modal = (props) => {
  return (
    <Dialog
      fullScreen={props.fullScreen}
      maxWidth={props.maxWidth}
      open={props.open}
      onClose={props.onClose}
    >
      {props.title && <DialogTitle>{props.title}</DialogTitle>}
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
