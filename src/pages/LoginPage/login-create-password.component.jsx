import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
  Avatar,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/login-context";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import {
  LOGIN,
  UPDATE_PASSWORD_USER,
  UPDATE_USER_PASSWORD,
} from "./mutation.gql";
import { RESET_PASSWORD } from "../../helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationEmailForm = yup
  .object({
    password: yup
      .string()
      .min(6, "A senha precisa ter mais de 6 caracteres")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não são iguais"),
  })
  .required();

const LoginCreatePassword = () => {
  let navigate = useNavigate();
  let resetPassword = RESET_PASSWORD;
  const [userData, setUserData] = useState({
    jwt: "",
    id: "",
  });

  const { loginData, setLoginData } = useContext(LoginContext);
  const [login] = useMutation(LOGIN);
  const [updateUserPassword] = useMutation(UPDATE_USER_PASSWORD);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  useEffect(() => {
    if (loginData.isResetPassword === false) navigate("/login");

    login({
      variables: {
        input: {
          identifier: loginData.email,
          password: RESET_PASSWORD,
        },
      },
      fetchPolicy: "network-only",
    }).then((data) => {
      setUserData((ud) => {
        return {
          ...ud,
          jwt: data.data.login.jwt,
          id: data.data.login.user.id,
        };
      });
    });
  }, []);

  const createPasswordForm = (dataForm) => {
    console.log(dataForm);
    updateUserPassword({
      variables: {
        updateUsersPermissionsUserId: userData.id,
        data: { isResetPassword: false, password: dataForm.password },
      },
      context: {
        headers: {
          authorization: `Bearer ${userData.jwt}`,
        },
      },
    })
      .then((data) => {
        setLoginData((ld) => {
          return {
            ...ld,
            email: "",
            isResetPassword: "",
          };
        });
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Ocorreu um erro ao criar senha!!");
      });
  };

  return (
    <form onSubmit={handleSubmit(createPasswordForm)} noValidate>
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
            type="password"
            label="Senha"
            defaultValue=""
            autoFocus
            fullWidth
            name="password"
            id="password"
            {...register("password")}
            helperText={errors.password?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Confirmar Senha"
            type="password"
            defaultValue=""
            fullWidth
            name="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword")}
            helperText={errors.confirmPassword?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" size="medium" variant="contained" fullWidth>
            Criar
          </Button>
          <ToastContainer />
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginCreatePassword;
