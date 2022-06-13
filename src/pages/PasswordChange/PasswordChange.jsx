import { Button, Container, Grid, TextField } from "@material-ui/core";
import DesignCard from "../../components/DesignCard/DesignCard";
import Dashboard from "../../templates/Dashboard/Dashboard";
import { makeStyles } from "@material-ui/styles";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    padding: "50px 5 px",
  },
  btn: {
    marginTop: "30px",
  },
});

function ActionComponent() {
  return (
    <Link to="/definition" style={{ textDecoration: "none" }}>
      <Button size="small" color="primary" variant="text">
        <KeyboardReturnIcon />
      </Button>
    </Link>
  );
}

const PasswordChange = () => {
  const classes = useStyles();
  return (
    <Dashboard>
      <Container maxWidth="xs" className={classes.container}>
        <DesignCard title="Alterar Senha" action={<ActionComponent />}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                id="standard-password-input"
                label="Senha Atual"
                type="password"
                autoComplete="current-password"
                variant="standard"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-password-input"
                label="Nova Senha"
                type="password"
                autoComplete="current-password"
                variant="standard"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-password-input"
                label="Repetir Senha"
                type="password"
                autoComplete="current-password"
                variant="standard"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                className={classes.btn}
              >
                Alterar
              </Button>
            </Grid>
          </Grid>
        </DesignCard>
      </Container>
    </Dashboard>
  );
};

export default PasswordChange;
