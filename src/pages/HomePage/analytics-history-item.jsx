import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const AnalyticsHistoryItem = (props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.date} />
      </ListItemButton>
    </ListItem>
  );
};

export default AnalyticsHistoryItem;
