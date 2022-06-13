import { Container, Grid, TextField, Button } from "@material-ui/core";
import DesignCard from "../../components/DesignCard/DesignCard";
import Dashboard from "../../templates/Dashboard/Dashboard";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

function ActionComponent() {
  return (
    <Link to="/definition" style={{ textDecoration: "none" }}>
      <Button size="small" color="primary" variant="text">
        <KeyboardReturnIcon />
      </Button>
    </Link>
  );
}

const useStyles = makeStyles({
  container: {
    padding: "50px 5 px",
  },
  btn: {
    marginTop: "30px",
  },
});

const SystemPage = () => {
    const classes = useStyles();
  return (
    <Dashboard>
      <Container maxWidth="xs">
        <DesignCard title="Sistema" action={<ActionComponent />}>
          <Grid container style={{ marginTop: "30px" }}>
            <Grid item xs={12}>
              <TextField
                id="standard-password-input"
                placeholder="Nome Empresa"
                type="text"
                variant="outlined"
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
                Salvar
              </Button>
            </Grid>
          </Grid>
        </DesignCard>
      </Container>
    </Dashboard>
  );
};

export default SystemPage;
