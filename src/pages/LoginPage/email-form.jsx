import { Alert, Avatar, Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { USER_BY_EMAIL } from "../../gqloperation/query";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";

const validationEmailForm = yup
  .object({
    email: yup
      .string()
      .email("Insira um email valido")
      .required("O email é obrigatório"),
  })
  .required();

let email = "";

const EmailForm = ({ setForm, setEmailLogin, emailLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const [getUserByEmail, { loading, data }] = useLazyQuery(
    USER_BY_EMAIL,
    {
      variables: {
        filters: {
          email: {
            eq: email,
          },
          blocked: {
            eq: false,
          },
        },
      },
    }
  );


  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(data)
    if (data && (data.usersPermissionsUsers.data.length > 0)) {
      if (data.usersPermissionsUsers.data[0].attributes.isResetPassword) {
        setEmailLogin(data.usersPermissionsUsers.data[0].attributes.email);
        setForm("NEW_PASSWORD");
      } else {
        setEmailLogin(data.usersPermissionsUsers.data[0].attributes.email);
        setForm("PASSWORD");
      }
    }else{
      setError(true)
    } 
  }, [data]);

  useEffect(()=>{
    setError(false)
    setEmailLogin("");
  }, [])

  const emailForm = (formData) => {
    email = document.getElementById("email").value;

    getUserByEmail();
  };

  return (
    <form onSubmit={handleSubmit(emailForm)} noValidate>
      <div style={{ marginLeft: 30, marginRight: 30, marginBottom: 30 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center" style={{ marginBottom: "20px" }}>
            <Avatar sx={{ marginBottom: "10px" }} color="primary">
              <LockOpenIcon />
            </Avatar>
            <Typography
              style={{ textAlign: "center" }}
              variant="h6"
              color="primary"
            >
              Acesso {emailLogin}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              label="Email"
              defaultValue=""
              fullWidth
              name="email"
              id="email"
              {...register("email")}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton type="submit" name="Seguinte" />
            {error && (
              <Alert severity="error" style={{ marginTop: 20 }}>
                Não foi possivel encontrar a sua conta
              </Alert>
            )}
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default EmailForm;
