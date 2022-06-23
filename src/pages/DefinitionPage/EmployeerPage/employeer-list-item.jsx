import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";

const EmployeerListItem = (props) => {
  return (
    <>
      <Card style={{ backgroundColor: "#F9FAFE" }} elevation={0}>
        <CardHeader />
        <CardContent>
          <Stack direction="column" alignItems="center" spacing={1}>
            <Avatar>A</Avatar>
            <Typography >{props.name}</Typography>
            <Typography style={{opacity: 0.6}} variant="body2">{props.initials}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeerListItem;
