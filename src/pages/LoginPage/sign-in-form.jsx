import {
  Alert,
  Avatar,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../gqloperation/mutation";
import { AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";

const validationEmailForm = yup
  .object({
    password: yup
      .string()
      .min(3, "A senha precisa ter mais de 3 caracteres")
      .required("A senha é obrigatória"),
  })
  .required();

const SignInForm = ({ setForm }) => {
  const navigate = useNavigate();
  const { emailLogin } = useContext(LoginContext);
  const context = useContext(AuthContext);

  const [errorMSN, setErrorMSN] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const [
    loginUser,
    { loading: loadingLogin, error: errorLogin },
  ] = useMutation(LOGIN_USER);

  const signForm = (dataForm) => {
    loginUser({
      variables: {
        input: dataForm,
      },
    })
      .then((data) => {
        context.login(data.data.login);
        navigate("/");
      })
      .catch((error) => {
        setErrorMSN(true);
      });
  };

  return (
    <form onSubmit={handleSubmit(signForm)} noValidate>
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
              onDelete={() => setForm("EMAIL")}
            />
          </Grid>

          <Grid item xs={12}>
            <input
              type="hidden"
              name="identifier"
              value={emailLogin}
              {...register("identifier")}
            />
            <TextField
              autoFocus
              required
              label="Senha"
              defaultValue=""
              fullWidth
              type="password"
              name="password"
              id="password"
              {...register("password")}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton type="submit" name="Acessar" />
            {errorMSN && (
              <Alert severity="error" style={{ marginTop: 20 }}>
                Não foi possivel acessar a sua conta
              </Alert>
            )}
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default SignInForm;
