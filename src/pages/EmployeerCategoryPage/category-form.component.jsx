import { Button, Grid, TextField } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";

const CategoryForm = () => {
  return (
    <MainCard title="Categoria">
      <form action="">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              autoFocus
              required
              label="Sigla"
              defaultValue=""
              fullWidth
              type="text"
              name="name"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              required
              label="Categoria"
              defaultValue=""
              fullWidth
              type="email"
              name="name"
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="medium" fullWidth>Adicionar</Button>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default CategoryForm;
