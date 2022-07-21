import { Grid, TextField } from "@mui/material";
import BackButton from "../../components/Button/back-button.component";
import CustomButton from "../../components/Button/custom-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_SYSTEM_DATA } from "../../gqloperation/query";
import { UPDATE_SYSTEM_DATA } from "../../gqloperation/mutation";
import Loading from "../../components/Loading/loading.component";

const validationEmailForm = yup
  .object({
    company: yup
      .string()
      .min(3, "Empresa precisa ter mais de 3 caracteres")
      .required("O campo empresa é obrigatorio"),
    email: yup
      .string()
      .email("Ensira um email válido")
      .required("O campo email é obrigatório"),
  })
  .required();

const SystemPage = () => {
  const jwt = localStorage.getItem("jwtToken");

  const { loading: loadingGetSystemData, error: errorGetSystemData, data: dataGetSystemData } = useQuery(GET_ALL_SYSTEM_DATA, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
  });

  const [
    updateSystemData,
    { loading: loadingUpdateSystem, data: dataUpdateSystem },
  ] = useMutation(UPDATE_SYSTEM_DATA, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
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

  if (loadingGetSystemData) return <Loading />;

  

  const formSystem = ({ company, email }) => {

    updateSystemData({
      variables: {
        data: {
          company: company,
          email: email,
        },
      },
    }).then((d) => {
      console.log(d);
    });
  };

  return (
    <MainContainer title="Sistema" maxWidth="xs">
      <form onSubmit={handleSubmit(formSystem)} noValidate>
        <MainCard title={<BackButton />}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                label="Empresa"
                defaultValue={dataGetSystemData.system.data.attributes.company}
                fullWidth
                type="text"
                name="company"
                {...register("company")}
                helperText={errors.company?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Email"
                defaultValue={dataGetSystemData.system.data.attributes.email}
                fullWidth
                type="email"
                name="email"
                {...register("email")}
                helperText={errors.email?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomButton type="submit" name="Actualizar" />
            </Grid>
          </Grid>
        </MainCard>
      </form>
    </MainContainer>
  );
};

export default SystemPage;
