import { Grid, TextField } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationEmailForm = yup
  .object({
    postRole: yup
      .string()
      .min(2, "Sigla precisa ter mais de 2 caracteres")
      .required("O campo sigla é obrigatorio"),
    description: yup
      .string()
      .min(3, "Cargo precisa ter mais de 3 caracteres")
      .required("O campo cargo é obrigatório"),
  })
  .required();


const PostRoleForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const formPostRole = (dataForm) => {

  }


  return (
    <form onSubmit={handleSubmit(formPostRole)} noValidate>
    <Grid container spacing={3}>
      <Grid item xs={4}>
      <TextField
            required
            label="Sigla"
            defaultValue=""
            fullWidth
            type="text"
            name="postRole"
            {...register("postRole")}
            helperText={errors.postRole?.message}
          />
      </Grid>
      <Grid item xs={8}>
      <TextField
            required
            label="Cargo"
            defaultValue=""
            fullWidth
            type="text"
            name="description"
            {...register("description")}
            helperText={errors.description?.message}
          />
      </Grid>

      <Grid item xs={12}>
        <CustomButton type="submit" name="Adicionar" />
      </Grid>
    </Grid>
    </form>
  );
};

export default PostRoleForm;
