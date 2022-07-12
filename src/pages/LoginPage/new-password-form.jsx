import { Avatar, Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import LockResetIcon from '@mui/icons-material/LockReset';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const NewPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });
  const newPasswordForm = (data) => {
    
  };

  return (
    <form onSubmit={handleSubmit(newPasswordForm)} noValidate>
      <div style={{ marginLeft: 30, marginRight: 30, marginBottom: 30 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center" style={{ marginBottom: "20px" }}>
            <Avatar sx={{ marginBottom: "10px" }} color="primary">
              <LockResetIcon />
            </Avatar>
            <Typography
              style={{ textAlign: "center" }}
              variant="h6"
              color="primary"
            >
              Nova Senha
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
             required
             label="Senha"
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
            <CustomButton type="submit" name="Seguinte" />
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default NewPasswordForm;
