import {
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    borderRadius: "10px",
    marginBottom: "30px",
  },
});

const DesignCard = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Card elevation={2} className={classes.card}>
        <CardContent>
          <Typography variant="h6" gutterBottom>{props.title}</Typography>
          <Typography variant="body2">{props.subtitle}</Typography>
          {props.children}
        </CardContent>
        <CardActions>{props.action}</CardActions>
      </Card>
    </Container>
  );
};

export default DesignCard;
