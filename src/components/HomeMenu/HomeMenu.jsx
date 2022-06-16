import { makeStyles } from "@material-ui/styles";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import DesignCard from "../DesignCard/DesignCard";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
});

function ComponentAction() {
  const classes = useStyles();
  return (
    <Stack direction="row" spacing={2}>
      <Link to='/profile' className={classes.link}>
        <Button
          color="success"
          style={{ borderRadius: "15px" }}
          variant="contained"
          size="small"
        >
          Perfil
        </Button>
      </Link>
      <Link to='/rating' className={classes.link}>
      <Button variant="text" size="small">
        Avaliação
      </Button>
      </Link>
      <Link to="/definition" className={classes.link}>
        <Button variant="text" size="small">
          Definições
        </Button>
      </Link>
    </Stack>
  );
}

const HomeMenu = () => {
  return (
    <article>
      <DesignCard
        title="Bem-vindo Claudio!!"
        subtitle="Voçê tem 1 avaliação pendente."
        action={<ComponentAction />}
      ></DesignCard>
    </article>
  );
};

export default HomeMenu;
