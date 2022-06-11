import { Button, Grid } from "@mui/material";
import MainCard from "..";
import MenuCard from "./MenuCard";

const HomePageMenuCard = () => {
  return (
    <article>
      <MainCard title="Bem vindo Claudio!!" subtitle="Voçê tem 1 avaliação pendente.">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <MenuCard>
              <Button variant="contained" fullWidth>Avaliação</Button>
            </MenuCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MenuCard>
              <Button variant="contained" fullWidth>Definição</Button>
            </MenuCard>
          </Grid>
        </Grid>
      </MainCard>
    </article>
  );
};

export default HomePageMenuCard;
