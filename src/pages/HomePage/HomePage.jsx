import Dashboard from "../../templates/Dashboard/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import HomeMenu from "../../components/HomeMenu/HomeMenu";
import HomeAnalytics from "../../components/HomeAnalytics/HomeAnalytics";
import RatingSelf from "../../components/RatingSelf/RatingSeff";
import RatingStatus from "../../components/RatingStatus/RatingStatus";

const useStyles = makeStyles({
  container: {
    margin: "0 auto",
  },
});

const HomePage = (props) => {
  const classes = useStyles();
  return (
    <Dashboard>
      <Grid container maxWidth="md" className={classes.container}>
        <Grid item xs={12} md={6}>
          <HomeMenu />
          <RatingSelf />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeAnalytics />
          <RatingStatus />
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default HomePage;
