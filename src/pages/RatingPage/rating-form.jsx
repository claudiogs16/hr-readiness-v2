import {
  Box,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import CustomButton from "../../components/Button/custom-button.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  GET_ALL_POST_ROLE,
  GET_ALL_USER_DATA_BY_ID,
  GET_ALL_USER_FILTERS,
} from "../../gqloperation/query";
import { CREATE_EVALUATOR, CREATE_PERIOD } from "../../gqloperation/mutation";
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
    description: yup
      .string()
      .min(3, "A descrição precisa ter mais de 3 caracteres")
      .required("Descrição é obrigatorio"),
  })
  .required();

const RatingForm = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [personName, setPersonName] = useState([]);
  const [names, setNames] = useState([]);
  const employeerID = useRef("");
  const periodData = useRef("");
  const theme = useTheme();

  const {
    loading: loadingGetPostRole,
    error: errorGetPostRole,
    data: dataGetPostRole,
  } = useQuery(GET_ALL_POST_ROLE, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
  });

  const [getAllUsers] = useLazyQuery(GET_ALL_USER_FILTERS);
  const [getAllUserID] = useLazyQuery(GET_ALL_USER_DATA_BY_ID);
  const [createPeriod] = useMutation(CREATE_PERIOD);
  const [createEvaluator] = useMutation(CREATE_EVALUATOR);

  useEffect(() => {
    getAllUsers({
      variables: {
        filters: {
          blocked: {
            eq: false,
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
      setNames(
        d.data.usersPermissionsUsers.data.map((name) => name.attributes.name)
      );
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const formRating = (dataForm) => {
    if (employeerID.current.value === "")
      return toast.warn("Escolher um funcionário!!");

    if (periodData.current.value === "")
      return toast.warn("Não foi adicionado data de avaliação!!");

    if (personName.length === 0)
      return toast.warn("Não foi adicionado nenhum avaliador!!");

    if (personName.length > 4)
      return toast.warn("Só é permitido no máximo 4 avaliadores!!");

    createPeriod({
      variables: {
        data: {
          description: dataForm.description,
          period_date: periodData.current.value,
          employeer: employeerID.current.value,
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
    }).then((d) => {
      getAllUserID({
        variables: {
          filters: {
            name: {
              in: personName,
            },
          },
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      }).then((r) => {
        r.data.usersPermissionsUsers.data.map((user) => {
          createEvaluator({
            variables: {
              data: {
                employeers: parseInt(user.id),
                periods: parseInt(d.data.createPeriod.data.id),
              },
            },
            context: {
              headers: {
                authorization: `Bearer ${jwt}`,
              },
            },
          });
        });
        toast.success("Nova avaliação adicionado com sucesso!!");
        document.getElementById("description").value = "";
        setPersonName([]);
        employeerID.current.value = "";
        // setPariodDate("");
        periodData.current.value = "";
      });
    });
  };

  if (loadingGetPostRole) return <h1>Carregando...</h1>;

  return (
    <form onSubmit={handleSubmit(formRating)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            autoFocus
            label="Descrição"
            defaultValue=""
            fullWidth
            multiline
            rows={2}
            type="text"
            id="description"
            name="description"
            {...register("description")}
            helperText={errors.description?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ minWidth: "100%" }}>
            <InputLabel htmlFor="grouped-native-select">Funcionário</InputLabel>
            <Select
              native
              defaultValue=""
              fullWidth
              id="grouped-native-select"
              label="Funcionário"
              inputRef={employeerID}
            >
              <option aria-label="None" value="" />
              {dataGetPostRole.postRoles.data.map(
                (postRole) =>
                  postRole.attributes.users.data.length && (
                    <optgroup
                      key={postRole.id}
                      label={postRole.attributes.postRole}
                    >
                      {postRole.attributes.users.data.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.attributes.name}
                        </option>
                      ))}
                    </optgroup>
                  )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Data Avaliação"
            fullWidth
            type="date"
            inputRef={periodData}
            name="period_date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-chip-label">Avaliadores</InputLabel>
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

export default RatingForm;
