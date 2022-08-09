import {
  Avatar,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/login-context";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useLazyQuery } from "@apollo/client";
import { GET_EMPLOYEER_BY_EMAIL } from "./query.gql";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationEmailForm = yup
  .object({
    email: yup
      .string()
      .email("Insira um email valido")
      .required("O email é obrigatório"),
  })
  .required();

const LoginEmail = () => {
  let navigate = useNavigate();
  const { loginData, setLoginData } = useContext(LoginContext);

  const [getEmployeerByEmail] = useLazyQuery(GET_EMPLOYEER_BY_EMAIL);

  useEffect(() => {
    if (loginData.isResetPassword === true) {
      navigate("password/create");
    }
  }, [loginData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const loginEmailForm = (formData) => {
    getEmployeerByEmail({
      variables: {
        filters: {
          email: {
            eq: formData.email,
          },
          blocked: {
            eq: false,
          },
        },
      },
      fetchPolicy: "network-only",
    }).then((data) => {
      if (data.data.usersPermissionsUsers.data.length === 0) {
        toast.error("Não foi possivel encontrar a sua conta!!");
      } else {
        let employeerData = data.data.usersPermissionsUsers.data[0];

        setLoginData((ld) => {
          return {
            ...ld,
            email: employeerData.attributes.email,
          };
        });

        if (employeerData.attributes.isResetPassword === true) {
          setLoginData((ld) => {
            return {
              ...ld,
              email: employeerData.attributes.email,
              id: employeerData.id,
              isResetPassword: true,
            };
          });
        }

        navigate("password");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(loginEmailForm)} noValidate>
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
          <Button type="submit" size="medium" variant="contained" fullWidth>
            Seguinte
          </Button>
          <ToastContainer />
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginEmail;
