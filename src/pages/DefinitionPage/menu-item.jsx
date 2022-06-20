import { Button, Card, CardContent } from "@mui/material";
import { useState } from "react";
import Modal from "../../components/Modal/modal.component";

const MenuItem = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} maxWidth="lg" fullScreen={true}>
        {props.modalContent}
      </Modal>

      <Card
        elevation={0}
        style={{ borderRadius: "15px", backgroundColor: "#F9FAFE" }}
      >
        <CardContent style={{ textAlign: "center" }}>
          {props.icon}
          <Button
            onClick={handleClickOpen}
            variant="text"
            size="small"
            fullWidth
          >
            {props.title}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default MenuItem;
