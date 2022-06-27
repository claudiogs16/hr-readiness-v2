import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import { ListItem } from "@mui/material";

const EmployeerListItem = props => {
  return (
    <ListItem disablePadding >
    <ListItemButton >
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary={props.name} />
    </ListItemButton>
    </ListItem>
  );
};

export default EmployeerListItem;
