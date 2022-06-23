import { Grid } from "@mui/material";

const MenuCard = (props) => {
  return (
    <Grid container style={{ marginBottom: "40px" }}>
      <Grid style={{ textAlign: "left", paddingLeft: "15px" }} item xs={6}>
        {props.itemLeft}
      </Grid>
      <Grid style={{ textAlign: "right" }} item xs={6}>
        {props.itemRight}
      </Grid>
    </Grid>
  );
};

export default MenuCard;
