import { Grid, Stack } from "@mui/material";
import MainCard from "..";
import MenuCard from "../MenuCard";

const DefinitionCard = () => {
  return (
    <Grid container maxWidth="sm" style={{ margin: "0 auto" }}>
      <MainCard title='Definições'>
        <Stack direction='row'>
        <Grid item xs={12} sm={4} >
          <MenuCard />
        </Grid>
        <Grid item xs={12} sm={4} >
          <MenuCard />
        </Grid>
        <Grid item xs={12} sm={4} >
          <MenuCard />
        </Grid>
        </Stack>
      </MainCard>
    </Grid>
  );
};

export default DefinitionCard;
