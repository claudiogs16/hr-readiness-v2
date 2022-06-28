import { Grid } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import MainTemplate from "../../templates/MainTemplate/main.template";
import MenuLeft from "./menu-left";
import MenuRight from "./menu-right";

const DefinitionPage = () => {
  return (
    <MainTemplate title="Definições" maxWidth="md">
     <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
      <MainCard title="Avaliações" content={<MenuLeft />} />
      </Grid>
      <Grid item xs={12} md={6}>
      <MainCard title="Sistema" content={<MenuRight />} />
      </Grid>
     </Grid>
        
      
    </MainTemplate>
  );
};

export default DefinitionPage;
