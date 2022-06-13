import { Card } from "@material-ui/core";
import { CardContent } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    textAlign: "center",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
    height: '120px',
  },
});

const ItemMenuCard = (props) => {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.card}>
      <CardContent>
        {props.icon}
        {props.button}
      </CardContent>
    </Card>
  );
};

export default ItemMenuCard;
