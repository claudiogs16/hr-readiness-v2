import { FormControl, Grid, InputLabel, Select, TextField } from "@mui/material";

const RatingForm = () => {
  return (
    <form action="">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            autoFocus
            label="Descrição"
            defaultValue=""
            fullWidth
            type="text"
            name="description"
          />
        </Grid>
        <Grid item xs={12}>
        <FormControl fullWidth>
            <InputLabel id="select-post-role-input-label">Funcionário</InputLabel>
            <Select
              labelId="select-post-role-label"
              required
              id="select-post-role"
              value=''
              label="Funcionário"
            >
             
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default RatingForm;
