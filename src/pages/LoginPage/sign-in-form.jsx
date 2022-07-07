import { Avatar, Chip, Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationEmailForm = yup
  .object({
    password: yup.string().min(3, "A senha precisa ter mais de 3 caracteres").required("A senha é obrigatória"),
  })
  .required();
const SignInForm = ({email}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });
  const signInForm = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(signInForm)} noValidate>
      <div style={{ marginLeft: 30, marginRight: 30, marginBottom: 30 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center" style={{ marginBottom: "20px" }}>
            <Avatar sx={{ marginBottom: "10px" }} color="primary">
              <AccountCircleIcon />
            </Avatar>
            <Typography
              style={{ textAlign: "center" }}
              variant="h6"
              color="primary"
            >
              Acesso
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography style={{ marginBottom: "10px", opacity: 0.8 }}>
              Seja Bem-vindo
            </Typography>
            <Chip
              label={email}
              variant="outlined"
              onClick={() => {}}
              onDelete={() => {}}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              label="Senha"
              defaultValue=""
              fullWidth
              name="password"
              {...register("password")}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton type="submit" name="Acessar" />
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default SignInForm;
