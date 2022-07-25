import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import CustomSelect from "../../components/Select/custom-select.component";
import { GET_ALL_DIMENSIOS } from "../../gqloperation/query";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { CREATE_INDICATOR } from "../../gqloperation/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationEmailForm = yup
  .object({
    indicator: yup
      .string()
      .min(3, "O indicador precisa ter mais de 3 caracteres")
      .required("Indicador é obrigatorio"),
  })
  .required();

const IndicatorForm = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [dimension, setDimension] = useState("");

  const msnSuccess = () =>
    toast.success("O indicador foi adicionado com sucesso!!");
  const msnError = () => toast.error("Erro ao adicionar indicador!!");

  const handleDimensionChange = (e) => {
    setDimension(e.target.value);
  };

  const {
    loading: loadingGetAllDimension,
    error: errorGetAllDimension,
    data: dataGetAllDimension,
  } = useQuery(GET_ALL_DIMENSIOS, {
    context: {
      filters: {
        isActive: {
          eq: true,
        },
      },
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
  });

  const [
    createIndicator,
    { loading: loadingCreateIndicator, error: errorCreateIndicator },
  ] = useMutation(CREATE_INDICATOR);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const formIndicator = ({ indicator }) => {
    // console.log(indicator);
    // console.log(dimension);

    createIndicator({
      variables: {
        data: {
          indicator: indicator,
          dimension: dimension,
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
    })
      .then((r) => {
        setDimension("");
        document.getElementById("indicator").value = "";
        msnSuccess();
      })
      .catch((e) => {
        msnError();
      });
  };

  return (
    <form onSubmit={handleSubmit(formIndicator)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="select-post-role-input-label">Dimensão</InputLabel>
            <Select
              labelId="select-post-role-label"
              id="select-post-role"
              value={dimension}
              label="Dimensão"
              onChange={handleDimensionChange}
            >
              {dataGetAllDimension &&
                dataGetAllDimension.dimensions.data.map((d) => (
                  <MenuItem key={d.id} value={d.id}>
                    {d.attributes.dimension}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="indicator"
            required
            label="Indicador"
            defaultValue=""
            fullWidth
            multiline
            type="text"
            name="indicator"
            {...register("indicator")}
            helperText={errors.indicator?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton type="submit" name="Adicionar" />
          <ToastContainer />
        </Grid>
      </Grid>
    </form>
  );
};

export default IndicatorForm;
