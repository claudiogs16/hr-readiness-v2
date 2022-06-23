import { Button, Grid, Stack } from "@mui/material";
import DripChart from "../../components/Charts/DripChart/drip-chart.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainTemplate from "../../templates/MainTemplate/main.template";
import AnalyticsHistory from "./analytics-history";
import AnalyticsItem from "./analytics-item";
import HistoryChart from "../../components/Charts/DripChart/history-chart.component";

const HomePageMenu = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        color="warning"
        variant="contained"
        size="small"
        style={{ borderRadius: "15px" }}
      >
        Perfil
      </Button>
      <Button variant="text" size="small">
        Alterar Senha
      </Button>
    </Stack>
  );
};

const HomePage = () => {
  return (
    <MainTemplate title="Pagina Inicial" maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {/* Card Profile */}
          <MainCard
            title="Bem-vindo Claudio!!"
            subtitle="Programador"
            action={<HomePageMenu />}
          />
          {/* Card Drip Chart */}
          <MainCard
            title="Gráfico"
            subtitle="Última Avaliação"
            content={<DripChart />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Card Analytics */}
          <MainCard title="Análise" content={<AnalyticsItem />} />
          {/* Card historic */}
          <MainCard
            title="Histórico de Avaliação"
            subtitle="Últimas Avaliações"
            content={<AnalyticsHistory />}
            action={
              <Button variant="text" size="small">
                Ver Mais
              </Button>
            }
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MainCard
          title="Gráfico"
          subtitle="Histórico Avaliação Anual"
          content={<HistoryChart />}
        />
      </Grid>
    </MainTemplate>
  );
};

export default HomePage;
