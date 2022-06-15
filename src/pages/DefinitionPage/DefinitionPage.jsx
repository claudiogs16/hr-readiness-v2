import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";
import DesignCard from "../../components/DesignCard/DesignCard";
import ItemMenuCard from "../../components/ItemMenuCard/ItemMenuCard";
import Dashboard from "../../templates/Dashboard/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ConstructionIcon from "@mui/icons-material/Construction";
import { Link } from "react-router-dom";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';

const useStyles = makeStyles({
  container: {
    margin: "0 auto",
  },
});

function ButtonComponent(props) {
  return (
    <Link to={props.url} style={{ textDecoration: "none" }}>
      <Button variant="text" size="small" fullWidth color="primary">
        {props.name}
      </Button>
    </Link>
  );
}

const DefinitionPage = () => {
  const classes = useStyles();
  return (
    <Dashboard>
      <Container maxWidth="sm" className={classes.container}>
        <DesignCard title="Definições" action={<ReturnButton url="/" />}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <ItemMenuCard
                icon={<GroupIcon fontSize="large" />}
                button={<ButtonComponent name="Funcionário" url="/employeer" />}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <ItemMenuCard
                icon={<SupervisedUserCircleIcon fontSize="large" />}
                button={<ButtonComponent name="Cargo" url="/password" />}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <ItemMenuCard
                icon={<VisibilityIcon fontSize="large" />}
                button={<ButtonComponent name="Permissão" url="/password" />}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <ItemMenuCard
                icon={<ConstructionIcon fontSize="large" />}
                button={<ButtonComponent name="Sistema" url="/system" />}
              />
            </Grid>

            <Grid item xs={6} sm={4}>
              <ItemMenuCard
                icon={<VpnKeyIcon fontSize="large" />}
                button={
                  <ButtonComponent name="Alterar Senha" url="/password" />
                }
              />
            </Grid>
          </Grid>
        </DesignCard>
      </Container>
    </Dashboard>
  );
};

export default DefinitionPage;
