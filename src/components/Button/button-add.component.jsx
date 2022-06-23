import { IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

const ButtonAdd = props => {
  return (
    <IconButton onClick={props.onClick} color="info" aria-label="Add" component="span">
      <AddBoxIcon fontSize='large' />
    </IconButton>
  );
};

export default ButtonAdd;
