import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const PeriodForm = () => {
    return (
        <Grid container maxWidth="md" spacing={3} style={{ marginTop: '5px' }}>
            <Grid item xs={12} md={8}>
                <TextField
                    autoFocus
                    required
                    label="Descricao"
                    fullWidth
                    type="text"
                    name="description"
                    id="description"

                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    autoFocus
                    required
                    label="Data de Avaliacao"
                    fullWidth
                    type="date"
                    name="date"
                    id="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="select-post-role-input-label">Avaliadores</InputLabel>
              <Select
                labelId="select-post-role-label"
                id="select-post-role"
                
                label="Cargo"
                name="postRole"
                
              >
               
                 
                    <MenuItem  value="">
                    Nomes
                  </MenuItem>
                
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="select-post-role-input-label">Avaliados</InputLabel>
              <Select
                labelId="select-post-role-label"
                id="select-post-role"
                
                label="Cargo"
                name="postRole"
                
              >
               
                 
                    <MenuItem  value="">
                    Nomes
                  </MenuItem>
                
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <Button type="submit" size="large" variant="contained" fullWidth>
              Adicionar
            </Button>
            {/* <ToastContainer /> */}
          </Grid>
        </Grid>
    );
}

export default PeriodForm;