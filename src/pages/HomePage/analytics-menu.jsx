import { Grid } from "@mui/material";
import CardMenu from "../../components/MainCard/card-menu.component";

const AnalyticsMenu = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <CardMenu btnName="Avaliações" count="120" bgcolor="#F9FAFE" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardMenu btnName="Efectuado" count="100" bgcolor="#F9FAFE" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardMenu btnName="Pendente" count="20" bgcolor="#F9FAFE" />
      </Grid>
    </Grid>
  );
};

export default AnalyticsMenu;
