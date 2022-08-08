import { Avatar, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const LoginEmail = () => {
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
        <Grid item xs={12}>
            <TextField
              required
              label="Email"
              defaultValue=""
              fullWidth
              name="email"
              id="email"
              
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" size="medium" variant="contained" fullWidth>Seguinte</Button>
            
          </Grid>
      </Grid>
    </form>
  );
};

export default LoginEmail;
