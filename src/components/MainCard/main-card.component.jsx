import { Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
const MainCard = (props) => {
  return (
    <Card elevation={1} style={{ borderRadius: "10px", marginBottom: "40px" }}>
      <CardHeader
        title={props.title}
        subheader={props.subtitle}
        titleTypographyProps={{ variant: "h6" }}
        subheaderTypographyProps={{ variant: "body2" }}
        action={props.headerAction}
      />
      {props.content && <CardContent>{props.content}</CardContent>}
      <CardActions>{props.action}</CardActions>
    </Card>
  );
};

export default MainCard;
