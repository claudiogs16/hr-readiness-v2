import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import RatingTemplate from "../../templates/Dashboard/RatingTemplate";
import StatusCard from "../../components/RatingComponent/StatusCard/StatusCard";
import DripChart from "../../components/DripChart/DripChart";

const RatingPage = () => {
  return (
    <RatingTemplate>
      <Grid container maxWidth="md"  style={{ margin: "0px auto" }}>
        <Grid item xs={12}>
          <Card style={{backgroundColor: ''}} elevation={2}>
            <CardHeader
              avatar={<Avatar></Avatar>}
              title="Cláudio Gomes!!"
              action={<LogoutIcon />}
            />
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Stack direction="row" alignItems="center">
                    <Button variant="text">Dashboard</Button>
                    <Button variant="text">Novo</Button>
                    <Button variant="text">Historico</Button>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <StatusCard value="7" title='Avaliação Pendente' />
                    <StatusCard value="7" title='Historico' />
                  </Stack>
                </Grid>
                <Grid item xs={6} style={{height: '400px'}}>
                  <DripChart />
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <StatusCard value="7" title='Avaliação Pendente' />
                    <StatusCard value="7" title='Historico' />
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </RatingTemplate>
  );
};

export default RatingPage;
