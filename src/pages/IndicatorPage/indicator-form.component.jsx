import { Button, FormControl, Grid, InputLabel, Select, TextField } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";

const IndicatorForm = () => {
    return (
        <MainCard title="Indicador" >
      <form action="">
        <Grid container spacing={3}>
          
          
          
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="select-post-role-input-label">Dimensao</InputLabel>
              <Select
                labelId="select-post-role-label"
                id="select-post-role"
                value=""
                label="Cargo"
                
              ></Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              multiline
              rows={2}
              label="Indicador"
              defaultValue=""
              fullWidth
              type="text"
              name="name"
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button type="submit" size="large" variant="contained" fullWidth>
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </form>
    </MainCard>
    );
}
 
export default IndicatorForm;