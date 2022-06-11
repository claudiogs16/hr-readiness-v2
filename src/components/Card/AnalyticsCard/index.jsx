import { Grid } from "@mui/material";
import MainCard from "..";
import ContentCard from "./ContentCard";

const AnalyticsCard = () => {
  return (
    <article>
      <MainCard title="Análise">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ContentCard value="40" content="Funcionários" />
          </Grid>
          <Grid item xs={4}>
            <ContentCard value="210" content="Avaliações Efectuadas" />
          </Grid>
          <Grid item xs={4}>
            <ContentCard value="15" content="Avaliações Pendentes" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} >
            <ContentCard value="15" content="Outros" />
          </Grid>
          <Grid item xs={4}>
            <ContentCard value="15" content="Outros" />
          </Grid>
          <Grid item xs={4}>
            <ContentCard value="15" content="Outros" />
          </Grid>
        </Grid>
      </MainCard>
    </article>
  );
};

export default AnalyticsCard;
