import { Avatar, Grid, TextField, Typography } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationEmailForm = yup
  .object({
    email: yup
      .string()
      .email("Insira um email valido")
      .required("O email é obrigatório"),
  })
  .required();

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });
  const emailForm = (data) => console.log(data);

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
              Acesso
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              label="Email"
              defaultValue=""
              fullWidth
              name="email"
              {...register("email")}
              helperText={errors.email?.message}
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

export default EmailForm;
