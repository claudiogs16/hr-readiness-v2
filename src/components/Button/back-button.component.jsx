import { IconButton, Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Tooltip  title="Retroceder" placement="right">
      <IconButton onClick={() => navigate(-1)} color="info" aria-label="Add" component="span">
        <ArrowBackIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  );
};

export default BackButton;