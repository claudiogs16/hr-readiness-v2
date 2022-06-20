import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

const MainCard = (props) => {
  return (
    <Card elevation={1} style={{ borderRadius: "10px", marginBottom: "40px" }}>
      <CardHeader
        title={props.title}
        subheader={props.subtitle}
        titleTypographyProps={{ variant: "h6" }}
        subheaderTypographyProps={{ variant: "body2" }}
      />
      {props.content && <CardContent>{props.content}</CardContent>}
      <CardActions>{props.action}</CardActions>
    </Card>
  );
};

export default MainCard;
