import { Avatar, Button, Chip, Grid, Stack, TextField, Typography } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/login-context";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./mutation.gql";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/auth-context";

const validationEmailForm = yup
  .object({
    password: yup
      .string()
      .min(3, "A senha precisa ter mais de 3 caracteres")
      .required("A senha é obrigatória"),
  })
  .required();


const LoginPassword = () => {
  let navigate = useNavigate();
  const {loginData,setLoginData} = useContext(LoginContext)
  const context = useContext(AuthContext);

  const [login] = useMutation(LOGIN)

  useEffect(()=>{
    if(loginData.email === "" || loginData.isResetPassword === true)
      navigate("/login")

  }, [loginData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const handleClickDelete = () => {
    setLoginData(ld => {
      return {
        ...ld,
        email: ""
      }
    })
  }

  const loginForm = dataForm => {

    login({
      variables: {
        "input": {
          "identifier": loginData.email,
          "password": dataForm.password
        }
      }
    }).then(data => {
      context.login(data.data.login)
    }).catch(error => {
      alert("Senha incorrecta!!")
    })
  }


  return (
    <form onSubmit={handleSubmit(loginForm)} noValidate>
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
              label={loginData.email}
              variant="outlined"
              onClick={() => {}}
              onDelete={handleClickDelete}
            />
          </Grid>
        <Grid item xs={12}>
          <TextField
            required
            autoFocus
            label="Senha"
            type="password"
            defaultValue=""
            fullWidth
            name="password"
            id="password"
            {...register("password")}
              helperText={errors.password?.message}
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
