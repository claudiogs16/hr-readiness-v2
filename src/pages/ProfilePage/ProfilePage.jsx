import { Container, Grid, TextField, Button } from "@material-ui/core";
import DesignCard from "../../components/DesignCard/DesignCard";
import Dashboard from "../../templates/Dashboard/Dashboard";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";

function ActionComponent() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Button size="small" color="primary" variant="text">
        <KeyboardReturnIcon />
      </Button>
    </Link>
  );
}

const ProfilePage = () => {
  return (
    <Dashboard>
      <Container maxWidth="sm">
        <DesignCard title="Perfil" action={<ActionComponent />}>
          <Grid container spacing={4} style={{ marginTop: "20px" }}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                label="Primeiro Nome"
                variant="outlined"
                value="Claudio"
                required
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                label="Ultimo Nome"
                variant="outlined"
                value="Gomes"
                required
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="E-mail"
                variant="outlined"
                value="claudiogs16@gmail.com"
                required
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                label="Contacto"
                variant="outlined"
                value="9505710"
                required
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                label="Data de Inicio"
                variant="outlined"
                value="22/02/2022"
                fullWidth
                disabled
              />
            </Grid>
          </Grid>
        </DesignCard>
      </Container>
    </Dashboard>
  );
};

export default ProfilePage;
