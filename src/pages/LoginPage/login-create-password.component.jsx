import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Avatar, Button, Grid, Stack, TextField, Typography } from "@mui/material";

const LoginCreatePassword = () => {
  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Avatar sx={{ marginBottom: "10px" }} color="primary">
              <LockOpenIcon />
            </Avatar>
            <Typography
              style={{ textAlign: "center" }}
              variant="h6"
              color="primary"
            >
              Criar Senha
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Senha"
            defaultValue=""
            fullWidth
            name="email"
            id="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Confirmar Senha"
            defaultValue=""
            fullWidth
            name="email"
            id="email"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" size="medium" variant="contained" fullWidth>
            Criar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginCreatePassword;
