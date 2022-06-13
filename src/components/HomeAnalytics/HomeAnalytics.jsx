import { Grid } from "@mui/material";
import DesignCard from "../DesignCard/DesignCard";
import AnalyticCard from "./AnalyticCard";

const HomeAnalytics = () => {
  return (
    <article>
      <DesignCard title='Análise'>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <AnalyticCard title='Funcionários' value='45' />
          </Grid>
          <Grid item xs={4}>
            <AnalyticCard title='Funcionários Activos' value='230' />
          </Grid>
          <Grid item xs={4}>
            <AnalyticCard title='Funcionários Inactivos' value='15' />
          </Grid>
          <Grid item xs={4}>
            <AnalyticCard title='Avaliações' value='241' />
          </Grid>
          <Grid item xs={4}>
            <AnalyticCard title='Avaliações Efectuada' value='239' />
          </Grid>
          <Grid item xs={4}>
            <AnalyticCard title='Avaliações Pendente' value='2' />
          </Grid>
        </Grid>
      </DesignCard>
    </article>
  );
};

export default HomeAnalytics;
