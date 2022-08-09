import { Button, Grid, TextField, Typography } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GET_EMPLOYEER_BY_EMAIL } from "./query.gql";
import { useMutation, useLazyQuery } from "@apollo/client";
import { RESET_PASSWORD } from "./mutation.gql";
import {RESET_PASSWORD as passwor_reset} from '../../helpers'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationEmailForm = yup
  .object({
    email: yup
      .string()
      .email("Ensira um email válido")
      .required("O campo email é obrigatório"),
  })
  .required();

const PasswordResetPage = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [getEmployeerByEmail] = useLazyQuery(GET_EMPLOYEER_BY_EMAIL);
  const [resetPassword] = useMutation(RESET_PASSWORD);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const formResetPassword = (formData) => {
    getEmployeerByEmail({
      variables: {
        filters: {
          email: {
            eq: formData.email,
          },
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    })
      .then((d) => {
        let data = d.data.usersPermissionsUsers.data;

        if (data.length === 0) {
          console.log("Email não existe!!");
        } else {
          resetPassword({
            variables: {
              updateUsersPermissionsUserId: Number(data[0].id),
              data: {
                email: formData.email,
                password: passwor_reset,
                isResetPassword: true
              },
            },
            context: {
              headers: {
                authorization: `Bearer ${jwt}`,
              },
            },
          }).then(d=>{
            toast.success("Senha foi resetado com sucesso!!");
            document.getElementById("email").value = "";
          }).catch(e=>{
            toast.error("Ocorreu um erro ao repor a senha!!")
          });
        }
      })
      .catch((e) => {
        toast.error("Ocorreu um erro ao repor a senha!!");
      });
  };

  return (
    <MainContainer maxWidth="sm">
      <form onSubmit={handleSubmit(formResetPassword)} noValidate>
        <MainCard title="Repor Senha">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography style={{ opacity: 0.8 }}>
                Insira o email do utilizador no campo abaixo para repor a senha.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                required
                label="Email"
                defaultValue=""
                fullWidth
                type="email"
                name="email"
                {...register("email")}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button size="large" type="submit" variant="contained" fullWidth>
                Repor
              </Button>
              <ToastContainer />
            </Grid>
          </Grid>
        </MainCard>
      </form>
    </MainContainer>
  );
};

export default PasswordResetPage;
