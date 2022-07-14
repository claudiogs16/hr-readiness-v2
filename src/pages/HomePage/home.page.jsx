import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import DripChart from "../../components/Chart/drip-chart.component";
import HistoryChart from "../../components/Chart/history-chart.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import { AuthContext } from "../../contexts/AuthContext";
import AnalyticsHistory from "./analytics-history";
import AnalyticsMenu from "./analytics-menu";
import ProfileMenu from "./profile-menu";

const HomePage = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <MainContainer title="Pagina Inicial" maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MainCard
            title="Bem-vindo Cláudio!!"
            subtitle="Programador"
            action={<ProfileMenu />}
          />
          <MainCard title="Gráfico" subtitle="Ultima Avaliação">
            <DripChart />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <MainCard title="Análise">
            <AnalyticsMenu />
          </MainCard>
          <MainCard
            title="Histórico de Avaliação"
            subtitle="Ultimas Avaliações"
            action={
              <Button size="small" variant="text">
                Ver Mais
              </Button>
            }
          >
            <AnalyticsHistory />
          </MainCard>
        </Grid>
        <Grid item xs={12}>
          <MainCard title="Gráfico" subtitle="Histórico Avaliação Anual">
            <HistoryChart />
          </MainCard>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default HomePage;
