import { Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AnalyticsHistoryItem from "./analytics-history-item";

const AnalyticsHistory = () => {
  return (
    <Stack>
      <List sx={{ bgcolor: "background.paper" }}>
        <AnalyticsHistoryItem date='01/02/2022' icon={<AccountCircleIcon />} />
        <AnalyticsHistoryItem date='01/01/2022' icon={<AccountCircleIcon />} />
        <AnalyticsHistoryItem date='01/12/2021' icon={<SupervisedUserCircleIcon />} />
        <AnalyticsHistoryItem date='01/11/2021' icon={<SupervisedUserCircleIcon />} />
        <AnalyticsHistoryItem date='01/09/2021' icon={<AccountCircleIcon />} />
      </List>
    </Stack>
  );
};

export default AnalyticsHistory;
