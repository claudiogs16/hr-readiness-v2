import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";

const DimensionForm = () => {
    return (
        <MainCard title="Dimensão" >
      <form action="">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              label="Dimensão"
              defaultValue=""
              fullWidth
              type="text"
              name="name"
            />
          </Grid>
          
          
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="select-post-role-input-label">Categoria</InputLabel>
              <Select
                labelId="select-post-role-label"
                id="select-post-role"
                value=""
                label="Cargo"
                
              ></Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <Button type="submit" size="medium" variant="contained" fullWidth>
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </form>
    </MainCard>
    );
}
 
export default DimensionForm;