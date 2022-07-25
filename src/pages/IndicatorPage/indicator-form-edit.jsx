import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
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
import {
  GET_ALL_DIMENSIOS,
  GET_INDICATOR_BY_ID,
} from "../../gqloperation/query";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  CREATE_INDICATOR,
  UPDATE_INDICATOR,
} from "../../gqloperation/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const validationEmailForm = yup
  .object({
    indicator: yup
      .string()
      .min(3, "O indicador precisa ter mais de 3 caracteres")
      .required("Indicador é obrigatorio"),
  })
  .required();

const IndicatorFormEdit = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [status, setStatus] = useState(false);
  const [indicator, setIndicator] = useState("");
  const { indicatorID } = useParams();

  const msnSuccess = () =>
    toast.success("O indicador foi actualizado com sucesso!!");
  const msnError = () => toast.error("Erro ao atualizar indicador!!");

  const [getIndicator] = useLazyQuery(GET_INDICATOR_BY_ID);

  const [updateIndicator] = useMutation(UPDATE_INDICATOR);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    getIndicator({
      variables: {
        filters: {
          id: {
            eq: indicatorID,
          },
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then((d) => {
      setIndicator(d.data.indicators.data[0].attributes.indicator);
      setStatus(d.data.indicators.data[0].attributes.isActive);
    });
  }, []);

  const formIndicator = ({ indicator }) => {
    updateIndicator({
      variables: {
        updateIndicatorId: indicatorID,
        data: {
          indicator: indicator,
          isActive: status,
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    })
      .then((d) => {
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
          <TextField
            id="indicator"
            required
            label="Indicador"
            defaultValue={indicator}
            fullWidth
            multiline
            InputLabelProps={{
              shrink: true,
            }}
            type="text"
            name="indicator"
            {...register("indicator")}
            helperText={errors.indicator?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="select-status-indicator-input-label">
              estado
            </InputLabel>
            <Select
              labelId="select-status-label"
              id="select-status-indicator"
              value={status}
              label="estado"
              onChange={handleStatusChange}
            >
              <MenuItem value={true}>Activo</MenuItem>
              <MenuItem value={false}>Inactivo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <CustomButton type="submit" name="Actualizar" />
          <ToastContainer />
        </Grid>
      </Grid>
    </form>
  );
};

export default IndicatorFormEdit;
