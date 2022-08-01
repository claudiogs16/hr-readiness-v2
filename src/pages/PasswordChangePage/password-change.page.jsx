import { Grid, TextField } from "@mui/material";
import BackButton from "../../components/Button/back-button.component";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GET_ALL_USER_DATA_BY_ID, GET_ME } from "../../gqloperation/query";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import {
  LOGIN_USER,
  UPDATE_EMPLOYEER_BY_ID,
} from "../../gqloperation/mutation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/Loading/loading.component";

const validationEmailForm = yup
  .object({
    oldPassword: yup
      .string()
      .min(3, "Senha actual precisa ter no minimo 3 letras")
      .required("Senha actual é obrigatoria"),
    password: yup
      .string()
      .min(3, "Nova senha precisa ter no minimo 3 letras")
      .required("Nova senha é obrigatoria"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não são iguais"),
  })
  .required();

const PasswordChangePage = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [email, setEmail] = useState("");

  

  const [getMe] = useLazyQuery(GET_ME)

  const [loginUser] = useMutation(LOGIN_USER);
  const [updateUserPassword] = useMutation(UPDATE_EMPLOYEER_BY_ID);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  useEffect(()=>{
    getMe({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
    }).then(d=>{
      setEmail(d.data.me.email)
    })
  },[])

  

  const formPasswordChange = (dataForm) => {
    

    loginUser({
      variables: {
        input: {
          identifier: email,
          password: dataForm.oldPassword,
        },
      },
    })
      .then((d) => {
        updateUserPassword({
          variables: {
            updateUsersPermissionsUserId: d.data.login.user.id,
            data: {
              password: dataForm.password,
            },
          },
          context: {
            headers: {
              authorization: `Bearer ${jwt}`,
            },
          },
        })
          .then((d) => {
            toast.success("Senha foi alterado com sucesso!!");
          })
          .catch((e) => {
            toast.error("Não foi possivel alterar senha!!");
          });
      })
      .catch((e) => {
        toast.error("Senha antiga não coincidem!!");
      });
  };

  return (
    <MainContainer title="Alterar Senha" maxWidth="xs">
      <form onSubmit={handleSubmit(formPasswordChange)} noValidate>
        <MainCard title={<BackButton />}>
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
              <CustomButton type="submit" name="Alterar" />
              <ToastContainer />
            </Grid>
          </Grid>
        </MainCard>
      </form>
    </MainContainer>
  );
};

export default PasswordChangePage;
