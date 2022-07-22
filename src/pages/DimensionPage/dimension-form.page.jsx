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
  GET_ALL_POST_ROLE,
  GET_GET_POST_ROLES_FILTERS,
} from "../../gqloperation/query";
import { useEffect } from "react";
import { CREATE_DIMENSION } from "../../gqloperation/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const DimensionForm = () => {
  const jwt = localStorage.getItem("jwtToken");
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [names, setNames] = useState([]);

  const msnSuccess = () =>
    toast.success("Dimensão foi adicionado com sucesso!!");
  const msnError = () => toast.error("Erro ao adicionar dimensão!!");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const [
    getAllPostRoles,
    { loading: loadingGetAllPostRole, data: dataGetAllPostRole },
  ] = useLazyQuery(GET_ALL_POST_ROLE);

  const [
    getPostRolesId,
    { loading: loadingGetPostRolesId, data: dataGetPostRolesId },
  ] = useLazyQuery(GET_GET_POST_ROLES_FILTERS);

  const [
    createDimension,
    { loading: loadingCreateDimension, data: dataCreateDimension },
  ] = useMutation(CREATE_DIMENSION);

  useEffect(() => {
    getAllPostRoles({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
    }).then((r) => {
      setNames(r.data.postRoles.data.map((name) => name.attributes.postRole));
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

  const formDimension = (dataForm) => {
    // console.log(dataForm);
    // console.log(personName);
    getPostRolesId({
      variables: {
        filters: {
          postRole: {
            in: personName,
          },
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then((r) => {
      // console.log(r.data.postRoles.data);
      let postRolesId = r.data.postRoles.data.map((r) => r.id);

      createDimension({
        variables: {
          data: {
            dimension: dataForm.dimension,
            postRoles: postRolesId,
            isActive: true,
          },
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      })
        .then((r) => {
          document.getElementById("dimension").value = "";
          setPersonName([])
          msnSuccess();
        })
        .catch((e) => {
          msnError();
        });
    }).catch(e=>{
      msnError();
    });
  };

  return (
    <form onSubmit={handleSubmit(formDimension)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="dimension"
            required
            label="Dimensão"
            defaultValue=""
            fullWidth
            multiline
            rows={2}
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
          <CustomButton type="submit" name="Adicionar" />
          <ToastContainer />
        </Grid>
      </Grid>
    </form>
  );
};

export default DimensionForm;
