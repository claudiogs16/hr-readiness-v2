import { useQuery } from "@apollo/client";
import { Button, Grid } from "@mui/material";
import jwtDecode from "jwt-decode";
import DripChart from "../../components/Chart/drip-chart.component";
import HistoryChart from "../../components/Chart/history-chart.component";
import Loading from "../../components/Loading/loading.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import { GET_ALL_USER_DATA_BY_ID } from "../../gqloperation/query";
import AnalyticsHistory from "./analytics-history";
import AnalyticsMenu from "./analytics-menu";
import ProfileMenu from "./profile-menu";

const HomePage = () => {
  const jwt = localStorage.getItem("jwtToken");
  const { id: userID } = jwtDecode(jwt);

  const { loading, error, data } = useQuery(GET_ALL_USER_DATA_BY_ID, {
    variables: {
      filters: {
        id: {
          eq: userID,
        },
      },
    },
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
  });

  if (loading) return <Loading />

  return (
    <MainContainer title="Pagina Inicial" maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MainCard
            title={`Seja Bem-vindo ${data.usersPermissionsUsers.data[0].attributes.name}!!`}
            subtitle={
              data.usersPermissionsUsers.data[0].attributes.postRole.data
                .attributes.description
            }
            action={<ProfileMenu />}
          />
          <MainCard title="Gráfico" subtitle="Ultima Avaliação">
            <DripChart periodID={135} />
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
