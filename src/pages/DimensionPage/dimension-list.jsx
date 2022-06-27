import { Button, Grid, Stack } from "@mui/material";
import CustomSelect from "../../components/Select/custom-select.component";

const DimensionList = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CustomSelect label="Cargo" />
        <Stack direction="row" spacing={1}>
          <Button size="small">Avaliação</Button>
          <Button size="small">Previsualizar</Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <CustomSelect label="Dimensão" />
        <br />
        <Stack direction="row" spacing={1}>
          <Button size="small">Adicionar</Button>
          <Button size="small">Editar</Button>
          <Button size="small">Ocultar</Button>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <CustomSelect label="Indicador" />
        <Stack direction="row" spacing={1}>
          <Button size="small">Adicionar</Button>
          <Button size="small">Editar</Button>
          <Button size="small">Ocultar</Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <CustomSelect label="Pergunta" />
        <Stack direction="row" spacing={1}>
          <Button size="small">Adicionar</Button>
          <Button size="small">Editar</Button>
          <Button size="small">Ocultar</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DimensionList;
