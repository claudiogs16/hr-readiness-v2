import { Avatar, Chip, Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

const SignInForm = ({setForm}) => {
  const navigate = useNavigate();
  const { emailLogin } = useContext(LoginContext);

  return (
    <form noValidate>
      <div style={{ marginLeft: 30, marginRight: 30, marginBottom: 30 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center" style={{ marginBottom: "20px" }}>
            <Avatar sx={{ marginBottom: "10px" }} color="primary">
              <AccountCircleIcon />
            </Avatar>
            <Typography
              style={{ textAlign: "center" }}
              variant="h6"
              color="primary"
            >
              Acesso
            </Typography>
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
              label={emailLogin}
              variant="outlined"
              onClick={() => {}}
              onDelete={() => navigate('/login')}
            />
          </Grid>

          <Grid item xs={12}>
            <input type="hidden" name="identifier" />
            <TextField
              required
              label="Senha"
              defaultValue=""
              fullWidth
              type="password"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton type="submit" name="Acessar" />
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default SignInForm;
