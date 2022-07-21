import { Grid, TextField, Typography } from "@mui/material";
import BackButton from "../../components/Button/back-button.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import CustomTextField from "../../components/TextField/custom-text-field.component";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLazyQuery, useMutation } from "@apollo/client";
import { USER_BY_EMAIL } from "../../gqloperation/query";
import { UPDATE_USER_DATA } from "../../gqloperation/mutation";
import { RESET_PASSWORD } from "../../helpers";

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

  const [
    getUserByEmail,
    { loading: loadingUserByEmail, data: dataUserByEmail },
  ] = useLazyQuery(USER_BY_EMAIL);

  const [updateUserData, {loading: loadingUpdateUserData, data: dataUpdateUserData}] = useMutation(UPDATE_USER_DATA)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const formResetPassword = ({ email }) => {
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
    }).then(d => {
      console.log(d.data.usersPermissionsUsers.data[0].id)
      if(d.data.usersPermissionsUsers.data.length > 0){
        const ID = d.data.usersPermissionsUsers.data[0].id
        updateUserData({
          variables: {
            updateUsersPermissionsUserId: ID,
            data: {
              "password": RESET_PASSWORD,
              'isResetPassword': true
            }
          },
          context: {
            headers: {
              authorization: `Bearer ${jwt}`,
            },
          }
        })
      }else{
        console.log("Não foi encontrado")
      }
    }).catch(()=>{
      console.log("Não foi possivel")
    });
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
            </Grid>
          </Grid>
        </MainCard>
      </form>
    </MainContainer>
  );
};

export default PasswordResetPage;
