import { Grid, TextField, Typography } from "@mui/material";
import BackButton from "../../components/Button/back-button.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  GET_ALL_USER_DATA_BY_ID,
  USER_BY_EMAIL,
} from "../../gqloperation/query";
import { UPDATE_USER_DATA } from "../../gqloperation/mutation";
import { RESET_PASSWORD } from "../../helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";

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
  const { id: userID } = jwtDecode(jwt);

  const msnSuccess = () => toast.success("Senha foi resetado com sucesso!!");
  const msnError = () => toast.error("Erro ao resetar a senha!!");
  const msnErrorEmail = () => toast.error("Não pode resetar a sua senha!!");
  
  const {
    loading: loadingGetUserDataById,
    error: erroGetUserDataById,
    data: dataGetUserDataById,
  } = useQuery(GET_ALL_USER_DATA_BY_ID, {
    variables: {
      filters: {
        id: {
          eq: userID,
        },
      },
    },
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
  });

  

  const [
    getUserByEmail,
    { loading: loadingUserByEmail, data: dataUserByEmail },
  ] = useLazyQuery(USER_BY_EMAIL);

  const [
    updateUserData,
    { loading: loadingUpdateUserData, data: dataUpdateUserData },
  ] = useMutation(UPDATE_USER_DATA);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const formResetPassword = ({ email }) => {
    let userEmail = null;
    if (dataGetUserDataById) {
      userEmail =
        dataGetUserDataById.usersPermissionsUsers.data[0].attributes.email;
    }

    if(email === userEmail){
      msnErrorEmail();
    }else{
      console.log(email);
      getUserByEmail({
        variables: {
          filters: {
            email: {
              eq: email,
            },
            isResetPassword: {
              eq: false,
            },
          },
        },
        fetchPolicy: "network-only",
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      })
        .then((d) => {
          console.log(d.data.usersPermissionsUsers.data[0].id);
          if (d.data.usersPermissionsUsers.data.length > 0) {
            const ID = d.data.usersPermissionsUsers.data[0].id;
            updateUserData({
              variables: {
                updateUsersPermissionsUserId: ID,
                data: {
                  password: RESET_PASSWORD,
                  isResetPassword: true,
                },
              },
              context: {
                headers: {
                  authorization: `Bearer ${jwt}`,
                },
              },
            }).then((d) => {
              msnSuccess();
            });
          } else {
            console.log("Não foi encontrado");
          }
        })
        .catch(() => {
          msnError();
        });
    }

    
  };

  return (
    <MainContainer title="Repor Senha" maxWidth="xs">
      <form onSubmit={handleSubmit(formResetPassword)} noValidate>
        <MainCard title={<BackButton />}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography style={{ opacity: 0.8 }}>
                Insira o email do utilizador no campo abaixo para repor a senha.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
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
              <CustomButton type="email" name="Repor Senha" />
              <ToastContainer />
            </Grid>
          </Grid>
        </MainCard>
      </form>
    </MainContainer>
  );
};

export default PasswordResetPage;
