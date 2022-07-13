import { Alert, Avatar, Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { USER_BY_EMAIL } from "../../gqloperation/query";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

const validationEmailForm = yup
  .object({
    email: yup
      .string()
      .email("Insira um email valido")
      .required("O email é obrigatório"),
  })
  .required();

let email = "";

const EmailForm = ({ setForm }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { setEmailLogin, emailLogin } = useContext(LoginContext);

  const [
    getUserByEmail,
    { loading: loadingGetUserByEmail, data: dataGetUserByEmail },
  ] = useLazyQuery(USER_BY_EMAIL, {
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  useEffect(() => {
    if (
      dataGetUserByEmail &&
      dataGetUserByEmail.usersPermissionsUsers.data.length > 0
    ) {
      if (
        dataGetUserByEmail.usersPermissionsUsers.data[0].attributes
          .isResetPassword
      ) {
        setEmailLogin(email);
        navigate("/password-create");
      } else {
        setEmailLogin(email);
        setForm("PASSWORD");
      }
    } else {
      setError(true);
    }
  }, [dataGetUserByEmail]);

  useEffect(() => {
    setError(false);
    setEmailLogin("");
  }, []);

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
