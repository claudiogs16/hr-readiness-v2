import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import CustomButton from "../../components/Button/custom-button.component";
import CustomSelect from "../../components/Select/custom-select.component";
import { GET_ALL_DIMENSIOS, GET_ALL_INDICATOR } from "../../gqloperation/query";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_QUESTION } from "../../gqloperation/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationEmailForm = yup
  .object({
    question: yup
      .string()
      .min(3, "Questão precisa ter mais de 3 caracteres")
      .required("Questão é obrigatorio"),
  })
  .required();

const QuestionForm = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [dimension, setDimension] = useState("");
  const [indicator, setIndicator] = useState("");

  const msnSuccess = () => toast.success("Questão adicionado com sucesso!!");
  const msnError = () => toast.error("Erro ao adicionar questão!!");

  const {
    loading: loadingGetAllDimensions,
    error: errorGetAllDimensions,
    data: dataGetAllDimensions,
  } = useQuery(GET_ALL_DIMENSIOS, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
  });

  const [
    getAllIndicator,
    { loading: loadingGetAllIndicator, data: dataGetAllIndicator },
  ] = useLazyQuery(GET_ALL_INDICATOR);

  const [
    createQuestion,
    {
      data: dataCreateQuestion,
      error: errorCreateQuestion,
      loading: loadingCreateQuestion,
    },
  ] = useMutation(CREATE_QUESTION);

  const handleDimensionChange = (e) => {
    setDimension(e.target.value);

    getAllIndicator({
      variables: {
        filters: {
          isActive: {
            eq: true,
          },
          dimension: {
            id: {
              eq: e.target.value,
            },
          },
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    });
  };

  const handleIndicatorChange = (e) => {
    setIndicator(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  

  const formQuestion = ({ question }) => {
    createQuestion({
      variables: {
        data: {
          question: question,
          indicator: indicator,
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then((d) => {
      msnSuccess();
    }).catch(e=>{
      msnError();
    });
  };

  return (
    <form onSubmit={handleSubmit(formQuestion)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="select-dimension-input-label">Dimensão</InputLabel>
            <Select
              labelId="select-dimension-label"
              id="select-dimension"
              value={dimension}
              label="Dimensão"
              onChange={handleDimensionChange}
            >
              {dataGetAllDimensions &&
                dataGetAllDimensions.dimensions.data.map((d) => (
                  <MenuItem key={d.id} value={d.id}>
                    {d.attributes.dimension}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="select-indicator-input-label">Indicador</InputLabel>
            <Select
              labelId="select-indicator-label"
              id="select-indicator"
              value={indicator}
              label="Indicador"
              onChange={handleIndicatorChange}
            >
              {dataGetAllIndicator &&
                dataGetAllIndicator.indicators.data.map((i) => (
                  <MenuItem key={i.id} value={i.id}>
                    {i.attributes.indicator}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="question"
            required
            label="Questão"
            defaultValue=""
            multiline
            rows={2}
            fullWidth
            type="text"
            name="question"
            {...register("question")}
            helperText={errors.question?.message}
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

export default QuestionForm;
