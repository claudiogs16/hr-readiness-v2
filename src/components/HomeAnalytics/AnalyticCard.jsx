import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Typography } from "@mui/material";

const useStyles = makeStyles({
  value: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    display: 'block'
  },
  card: {
    height: '100px',
    backgroundColor: '#fafafa',
    borderRadius: '10px'
  }
});

const AnalyticCard = props => {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.card}>
      <CardContent >
        <Typography
          variant="subtitle1"
          className={classes.value}
        >
          {props.value}
        </Typography>
        <Typography
          variant="caption"
          color='primary'
          className={classes.description}
        >
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnalyticCard;
