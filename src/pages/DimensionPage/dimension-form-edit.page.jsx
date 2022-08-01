import { FormControl, Grid, InputLabel, TextField } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  GET_ALL_DIMENSIOS,
  GET_ALL_POST_ROLE,
  GET_DIMENSION_BY_ID,
  GET_GET_POST_ROLES_FILTERS,
} from "../../gqloperation/query";
import { useEffect } from "react";
import {
  CREATE_DIMENSION,
  UPDATE_DIMENSION,
} from "../../gqloperation/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import Loading from '../../components/Loading/loading.component'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const validationEmailForm = yup
  .object({
    dimension: yup
      .string()
      .min(3, "Dimensão precisa ter mais de 3 caracteres")
      .required("O campo dimensão é obrigatorio"),
  })
  .required();

const DimensionFormEdit = () => {
  const jwt = localStorage.getItem("jwtToken");
  const { dimensionID } = useParams();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [names, setNames] = useState([]);
  const [dimension, setDimension] = useState("");
  const [status, setStatus] = useState(false);

  const msnSuccess = () =>
    toast.success("Dimensão foi actualizado com sucesso!!");
  const msnError = () => toast.error("Erro ao actualizar dimensão!!");

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

  const [
    getAllDimensions,
    { loading: loadingGetAllDimension, data: dataGetAllDimension },
  ] = useLazyQuery(GET_DIMENSION_BY_ID);

  const [updateDimension] = useMutation(UPDATE_DIMENSION);

  useEffect(() => {
    getAllDimensions({
      variables: {
        filters: {
          id: {
            eq: dimensionID,
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
      setDimension(d.data.dimensions.data[0].attributes.dimension);
      setStatus(d.data.dimensions.data[0].attributes.isActive);

      let postRolesArray =
        d.data.dimensions.data[0].attributes.postRoles.data.map(
          (pr) => pr.attributes.postRole
        );

      setPersonName(postRolesArray);
    });
  }, []);

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(names) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const formEditDimension = ({ dimension }) => {
   
    updateDimension({
      variables: {
        "updateDimensionId": dimensionID,
        data: {
          dimension: dimension,
          isActive: status,
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only"
    })
      .then((r) => {
        msnSuccess();
      })
      .catch((e) => {
        msnError();
      });
  };

  

  return (
    <form onSubmit={handleSubmit(formEditDimension)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="dimension"
            required
            label="Dimensão"
            defaultValue={dimension}
            fullWidth
            multiline
            rows={2}
            InputLabelProps={{
              shrink: true,
            }}
            type="text"
            name="dimension"
            {...register("dimension")}
            helperText={errors.dimension?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-chip-label">Cargos</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              name="postRoles"
              multiple
              fullWidth
              disabled
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="select-status-dimension-input-label">
              estado
            </InputLabel>
            <Select
              labelId="select-status-label"
              id="select-status-dimension"
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

export default DimensionFormEdit;
