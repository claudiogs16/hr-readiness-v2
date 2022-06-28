import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

const MainCard = ({ title, subtitle, headerAction, action, children }) => {
  return (
    <Card elevation={1} style={{ borderRadius: "10px", marginBottom: "40px" }}>
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: "h6" }}
        subheader={subtitle}
        subheaderTypographyProps={{ variant: "body2" }}
        action={headerAction}
      />
      {children && <CardContent>{children}</CardContent>}
      <CardActions>{action}</CardActions>
    </Card>
  );
};

export default MainCard;
