import { IconButton, Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ButtonBack = () => {
  return (
    <Tooltip  title="Retroceder" placement="right">
      <IconButton color="info" aria-label="Add" component="span">
        <ArrowBackIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  );
};

export default ButtonBack;
