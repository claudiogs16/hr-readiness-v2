import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const AnalyticsHistoryItem = ({description, icon}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={description} />
      </ListItemButton>
    </ListItem>
  );
};

export default AnalyticsHistoryItem;