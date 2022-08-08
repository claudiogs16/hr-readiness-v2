import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AnalyticsItem = ({ bgcolor, count, btnName, icon, url }) => {
  let navigate = useNavigate();
  return (
    <Card
      elevation={0}
      style={{
        background: bgcolor,
        borderRadius: "15px",
        textAlign: "center",
        height: "120px",
      }}
    >
      <CardContent style={{ textAlign: "center" }}>
        {icon && <div style={{ display: "block" }}>{icon}</div>}
        {count && (
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", opacity: 0.6}}
          >
            {count}
          </Typography>
        )}
        <Button
          variant="text"
          size="small"
          fullWidth
          onClick={() => navigate(url)}
        >
          {btnName}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AnalyticsItem;
