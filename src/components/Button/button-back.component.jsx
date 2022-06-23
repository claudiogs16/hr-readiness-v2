import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ButtonBack = () => {
  return (
    <IconButton color="info" aria-label="Add" component="span">
      <ArrowBackIcon fontSize="medium" />
    </IconButton>
  );
};

export default ButtonBack;
