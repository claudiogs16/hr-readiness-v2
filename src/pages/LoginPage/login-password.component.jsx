import { Avatar, Button, Chip, Grid, Stack, TextField, Typography } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";


const LoginPassword = () => {
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
              Acesso
            </Typography>
          </Stack>
        </Grid>
        <Grid
            item
            xs={12}
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            <Typography style={{ marginBottom: "10px", opacity: 0.8 }}>
              Seja Bem-vindo
            </Typography>
            <Chip
              label="claudiogs16@gmail.com"
              variant="outlined"
              onClick={() => {}}
              onDelete={() => alert("Eliminar Email")}
            />
          </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Senha"
            defaultValue=""
            fullWidth
            name="password"
            id="email"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" size="medium" variant="contained" fullWidth>
            Acessar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginPassword;
