import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const ActionForm = () => {
    
    return (
      <Tooltip title="Adicionar Novo" placement="right">
        <IconButton
         
          color="info"
          aria-label="Add"
          component="span"
        >
          <PersonAddIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    );
  };


const EmployeerForm = () => {
  return (
    <MainCard title="Funcionário" headerAction={<ActionForm />}>
      <form action="">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              label="Nome Completo"
              defaultValue=""
              fullWidth
              type="text"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Email"
              defaultValue=""
              fullWidth
              type="email"
              name="name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Contacto"
              defaultValue=""
              fullWidth
              type="number"
              name="contact"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Data Inicio Função"
              fullWidth
              type="date"
              value=""
              
              name="start_date"
              InputLabelProps={{
                shrink: true,
              }}
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
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="select-role-input-label">Permissão</InputLabel>
              <Select
                labelId="select-role-label"
                id="select-role"
                value=""
                label="Permissão"
                
              ></Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="select-status-input-label">estado</InputLabel>
              <Select
                labelId="select-status-label"
                id="select-status"
                value=""
                label="estado"
                
              >
                <MenuItem value={true}>Activo</MenuItem>
                <MenuItem value={false}>Inactivo</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" size="medium" variant="contained" fullWidth>
              Registrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default EmployeerForm;
