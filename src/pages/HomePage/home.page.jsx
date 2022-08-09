import { useLazyQuery } from "@apollo/client";
import { Button, Grid, Stack } from "@mui/material";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HistoryChart from "../../components/Chart/area-chart.component";
import DripChart from "../../components/Chart/drip-chart.component";
import MainCard from "../../components/MainCard/main-card.component";
import { setTitle } from "../../helpers";
import Analytics from "./analytics.component";
import { GET_EMPLOYEER_DATA } from "./query.gql";

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
  const jwt = localStorage.getItem("jwtToken");
  const { id: userID } = jwtDecode(jwt);
  const [employeerData, setEmployeerData] = useState({
    name: '',
    postRole: ''
  })

  const [getEmployeerData] = useLazyQuery(GET_EMPLOYEER_DATA)

  useEffect(()=>{
    getEmployeerData({
      variables: {
        
          "usersPermissionsUserId": userID
        
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
    }).then(data=>{
      console.log(data.data.usersPermissionsUser.data)
      let employeerData = data.data.usersPermissionsUser.data
    }).catch(e=>{
      console.log(e)
    })
  },[])

  

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <MainCard
              title={`Seja Bem-vindo ${employeerData.name}!!`}
              subtitle={employeerData.postRole}
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
