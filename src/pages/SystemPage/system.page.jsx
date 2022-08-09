import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GET_SYSTEM_DATA } from "./query.gql";
import { useMutation, useLazyQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UPDATE_SYSTEM } from "./mutation.gql";

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
  const [systemData, setSystemData] = useState({
    company: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [isBtnOn, setIsBtnOn] = useState(true)

  const [getSystemData] = useLazyQuery(GET_SYSTEM_DATA);
  const [updateSystem] = useMutation(UPDATE_SYSTEM);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  useEffect(() => {
    getSystemData({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    })
      .then((data) => {
        let getData = data.data.system.data.attributes;
        setSystemData((sd) => {
          return {
            ...sd,
            company: getData.company,
            email: getData.email,
          };
        });
        setLoading(false);
      })
      .catch((e) => {
        toast.error("Ocorreu um erro ao carregar dados!!");
      });
  }, []);

  const systemForm = ({ company, email }) => {
    updateSystem({
      variables: {
        data: {
          company: company,
          email: email,
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
    }).then(us => {
      toast.success("Os dados foram actualizados com sucesso!!");
    }).catch(e => {
      toast.error("Ocorreu um erro ao actualizar dados!!");
    });
  };

  if (loading) return <h1>Carregando...</h1>;

  return (
    <MainContainer maxWidth="xs">
      <form onSubmit={handleSubmit(systemForm)} noValidate>
        <MainCard title="Definições">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                label="Empresa"
                defaultValue={systemData.company}
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
                defaultValue={systemData.email}
                fullWidth
                type="email"
                name="email"
                {...register("email")}
                helperText={errors.email?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Button  size="large" variant="contained" type="submit" fullWidth>
                Alterar
              </Button>
              <ToastContainer />
            </Grid>
          </Grid>
        </MainCard>
      </form>
    </MainContainer>
  );
};

export default SystemPage;
