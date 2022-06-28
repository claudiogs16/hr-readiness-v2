import { Grid } from "@mui/material";

const MenuCard = ({ itemLeft, itemRight }) => {
  return (
    <Grid
      container
      style={{
        marginBottom: "30px",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <Grid item xs={6} style={{ textAlign: "left" }}>
        {itemLeft}
      </Grid>
      <Grid item xs={6} style={{ textAlign: "right" }}>
        {itemRight}
      </Grid>
    </Grid>
  );
};

export default MenuCard;
