import { Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
  let navigate = useNavigate();

  return (
    <Card
      elevation={0}
      style={{ borderRadius: "15px", backgroundColor: props.bgcolor, height: "120px" }}
    >
      <CardContent style={{ textAlign: "center", fontSize: "3px" }}>
        {props.icon}
        <Button
          onClick={() => navigate(props.url)}
          variant="text"
          size="small"
          fullWidth
        >
          {props.title}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
