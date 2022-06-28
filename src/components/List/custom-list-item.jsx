import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const CustomListItem = ({ icon, description }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}

        <ListItemText primary={description} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
