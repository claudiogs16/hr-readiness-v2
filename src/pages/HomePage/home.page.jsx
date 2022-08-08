import { Button, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HistoryChart from "../../components/Chart/area-chart.component";
import DripChart from "../../components/Chart/drip-chart.component";
import MainCard from "../../components/MainCard/main-card.component";
import { setTitle } from "../../helpers";
import Analytics from "./analytics.component";

const ProfileMenu = () => {
  let navigate = useNavigate();
  return (
    <Stack direction="row" spacing={2}>
      <Button
        color="warning"
        variant="contained"
        size="small"
        style={{ borderRadius: "15px" }}
        onClick={() => navigate("profile")}
      >
        Ver Perfil
      </Button>
      <Button
        variant="text"
        size="small"
        onClick={() => navigate("password/change")}
      >
        Alterar Senha
      </Button>
    </Stack>
  );
};

const HomePage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <MainCard
              title="Seja bem-vindo Cláudio Gomes!!"
              subtitle="CEO"
              action={<ProfileMenu />}
            />
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Gráfico de Avaliação">
              <DripChart />
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="Análises">
              <Analytics />
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard
              title="Histórico de Avaliação"
              subtitle="Ultimas Avaliações"
            ></MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <HistoryChart />
      </Grid>
    </Grid>
  );
};

export default HomePage;
