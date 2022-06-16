import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Typography } from "@mui/material";

const useStyles = makeStyles({
  value: {
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    display: "block",
  },
  card: {
    height: "100px",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
  },
});

const StatusCard = (props) => {
  const classes = useStyles();
  return (
    <section>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" className={classes.value}>
            {props.value}
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            className={classes.description}
          >
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};

export default StatusCard;
