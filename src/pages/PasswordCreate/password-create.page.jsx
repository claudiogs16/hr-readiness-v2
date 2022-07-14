import { Alert, Avatar, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import BackButton from "../../components/Button/back-button.component";
import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, UPDATE_PASSWORD_USER } from "../../gqloperation/mutation";
import { RESET_PASSWORD } from "../../helpers";
import { useNavigate } from "react-router-dom";

const validationEmailForm = yup
  .object({
    password: yup
      .string()
      .min(3, "A senha precisa ter mais de 3 caracteres")
      .required("A senha é obrigatória"),
    confirm_password: yup
      .string()
      .min(3, "A senha precisa ter mais de 3 caracteres")
      .required("A senha é obrigatória"),
  })
  .required();

const PasswordCreatePage = () => {
  const navigate = useNavigate();
  const { emailLogin, setEmailLogin } = useContext(LoginContext);
  const [jwt, setJwt] = useState("");
  const [id, setId] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const [loginUser, { loading: loadingLogin, error: errorLogin }] =
    useMutation(LOGIN_USER);

  const [updatePasswordUser, { loading: loadingUpdate, error: errorUpdate }] =
    useMutation(UPDATE_PASSWORD_USER);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  useEffect(() => {
    loginUser({
      variables: {
        input: {
          identifier: emailLogin,
          password: RESET_PASSWORD,
        },
      },
    })
      .then((data) => {
        setJwt(data.data.login.jwt);
        setId(data.data.login.user.id);
      })
      .catch((error) => {
        console.log("Erro: " + error);
      });
  }, []);

  const passwordForm = (dataForm) => {
    if (dataForm.password === dataForm.confirm_password) {
      setErrorPassword(false);
      updatePasswordUser({
        variables: {
          updateUsersPermissionsUserId: id,
          data: { isResetPassword: false, password: dataForm.password },
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      }).then((data) => {
        setEmailLogin("");
        navigate("/login");
      });
    } else {
      setErrorPassword(true);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: { xs: "70px", md: "50px" } }}>
      <MainCard title={<BackButton />}>
        <form onSubmit={handleSubmit(passwordForm)} noValidate>
          <div style={{ marginLeft: 30, marginRight: 30, marginBottom: 30 }}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                align="center"
                style={{ marginBottom: "20px" }}
              >
                <Avatar sx={{ marginBottom: "10px" }} color="primary">
                  <VpnKeyIcon />
                </Avatar>
                <Typography
                  style={{ textAlign: "center" }}
                  variant="h6"
                  color="primary"
                >
                  Criar Senha
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  required
                  label="Nova Senha"
                  defaultValue=""
                  fullWidth
                  type="password"
                  name="password"
                  {...register("password")}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Confirmar Senha"
                  defaultValue=""
                  fullWidth
                  type="password"
                  name="confirm_password"
                  {...register("confirm_password")}
                  helperText={errors.confirm_password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomButton type="submit" name="Criar" />
                {errorPassword && (
                  <Alert severity="error" style={{ marginTop: 20 }}>
                    Essa não é a mesma senha que a primeira.
                  </Alert>
                )}
              </Grid>
            </Grid>
          </div>
        </form>
      </MainCard>
    </Container>
  );
};

export default PasswordCreatePage;
