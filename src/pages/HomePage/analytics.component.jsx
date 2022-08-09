import { Grid } from "@mui/material";
import AnalyticsItem from "./analytics-item";

const Analytics = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <AnalyticsItem
          btnName="Avaliações"
          count="0"
          bgcolor="#F9FAFE"
          url="evaluation/all/list"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AnalyticsItem btnName="Efectuado" count="0" bgcolor="#F9FAFE" />
      </Grid>
      <Grid item xs={12} md={4}>
        <AnalyticsItem btnName="Pendente" count="0" bgcolor="#F9FAFE" />
      </Grid>
    </Grid>
  );
};

export default Analytics;
