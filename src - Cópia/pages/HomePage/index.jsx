import { Grid } from "@mui/material";
import AnalyticsCard from "../../components/Card/AnalyticsCard";
import HomePageMenuCard from "../../components/Card/HomePageMenuCard";
import RatingSeflCard from "../../components/Card/RatingSelfCard";
import RatingStatusCard from "../../components/Card/RatingStatusCard";
import Dashboard from "../../templates/Dashboard";

const Home = (props) => {
  return (
    <Dashboard>
      <Grid container maxWidth="md" style={{ margin: "0 auto" }}>
        <Grid item xs={12} md={6}>
          <HomePageMenuCard />
          <RatingSeflCard />
          
        </Grid>
        <Grid item xs={12} md={6}>
          <AnalyticsCard />
          <RatingStatusCard />
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default Home;
