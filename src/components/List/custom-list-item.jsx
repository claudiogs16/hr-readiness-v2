import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const ListAction = () => {
  return (
    <IconButton edge="end" aria-label="delete">
      <EditIcon />
    </IconButton>
  );
};

const CustomListItem = ({ icon, description }) => {
  return (
    <ListItem disablePadding secondaryAction={<ListAction />}>
      <ListItemButton>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={description} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
