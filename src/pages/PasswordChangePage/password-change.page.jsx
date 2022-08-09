import { Button, Grid, TextField } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GET_ME } from "./query.gql";
import { useMutation, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { LOGIN, UPDATE_PASSWORD } from "./mutation.gql";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationEmailForm = yup
  .object({
    oldPassword: yup
      .string()
      .min(6, "Senha actual precisa ter no minimo 6 letras")
      .required("Senha actual é obrigatoria"),
    password: yup
      .string()
      .min(6, "Nova senha precisa ter no minimo 6 letras")
      .required("Nova senha é obrigatoria"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não são iguais"),
  })
  .required();

const PasswordChangePage = () => {
  const jwt = localStorage.getItem("jwtToken");

  const [userData, setUserData] = useState({
    id: "",
    email: "",
  });

  const [getMe] = useLazyQuery(GET_ME);
  const [login] = useMutation(LOGIN);
  const [updatePassword] = useMutation(UPDATE_PASSWORD);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  useEffect(() => {
    getMe({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    })
      .then((me) => {
        let data = me.data.me;
        setUserData((ud) => {
          return {
            ...ud,
            email: data.email,
            id: data.id,
          };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const passwordChangeForm = (dataForm) => {
    
    login({
      variables: {
        input: {
          identifier: userData.email,
          password: dataForm.oldPassword,
        },
      },
    })
      .then((d) => {
        
        updatePassword({
          variables: {
            updateUsersPermissionsUserId: Number(userData.id),
            data: {
              password: dataForm.password,
            },
          },
          context: {
            headers: {
              authorization: `Bearer ${jwt}`,
            },
          },
        }).then(d=>{
          toast.success("Senha alterada com sucesso!!");
          document.getElementById('oldPassword').value = "";
          document.getElementById('password').value = "";
          document.getElementById('confirmPassword').value = "";
        }).catch(e=>{
          toast.error("Ocorreu um erro ao alterar senha!!");
        });
      })
      .catch((e) => {
        toast.error("Senha actual incorrecta!!");
      });
  };

  return (
    <MainContainer maxWidth="xs">
      <form onSubmit={handleSubmit(passwordChangeForm)} noValidate>
        <MainCard title="Alterar Senha">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="oldPassword"
                required
                label="Senha Actual"
                defaultValue=""
                fullWidth
                type="text"
                name="oldPassword"
                {...register("oldPassword")}
                helperText={errors.oldPassword?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                required
                label="Nova Senha"
                defaultValue=""
                fullWidth
                type="text"
                name="password"
                {...register("password")}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="confirmPassword"
                required
                label="Confirmar Senha"
                defaultValue=""
                fullWidth
                type="text"
                name="confirmPassword"
                {...register("confirmPassword")}
                helperText={errors.confirmPassword?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button size="large" type="submit" variant="contained" fullWidth>
                Alterar Senha
              </Button>
              <ToastContainer />
            </Grid>
          </Grid>
        </MainCard>
      </form>
    </MainContainer>
  );
};

export default PasswordChangePage;
