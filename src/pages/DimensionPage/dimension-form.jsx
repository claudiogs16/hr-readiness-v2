import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_POST_ROLES, GET_POST_ROLE_ID_BY_POST_ROLE_NAME } from "./query.gql";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CREATE_DIMENSION, UPDATE_DIMENSION } from "./mutation.gql";

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
      .min(6, "Dimensao precisa ter mais de 6 caracteres")
      .required("Dimensao é obrigatorio"),      
  })
  .required();


const DimensionForm = ({dimension,setDimension, dimensions, setDimensions}) => {

  const jwt = localStorage.getItem("jwtToken");
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [names, setNames] = useState([]);
  const [btnName, setBtnName] = useState("Adicionar")

  const [getPostRoles] = useLazyQuery(GET_POST_ROLES)
  const [getPostRolesID] = useLazyQuery(GET_POST_ROLE_ID_BY_POST_ROLE_NAME)
  const [createDimension] = useMutation(CREATE_DIMENSION)
  const [updateDimension] = useMutation(UPDATE_DIMENSION)

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(names) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(()=>{
    
    getPostRoles({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: 'network-only' 
    }).then(data => {
      
      let postRoleList = data.data.postRoles.data;
      

      setNames(postRoleList.map(rl=>rl.attributes.postRole))
    }).catch(error=>{
      console.log("Erro ao carregar dados")
    })

    if(dimension.id !== '')
      setBtnName("Actualizar")


    setPersonName(dimension.postRoles)
    
    
  },[])

  const formDimension = formData => {
    
    if(personName.length === 0){
      toast.warning("Tens de escolher Cargo!!")
      return false
    }
    
    
    getPostRolesID({
      variables: {
        "filters": {
          "postRole": {
            "in": personName
          }
        }
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: 'network-only'
    }).then(data => {
      
      let postRolesID = [];
      postRolesID = data.data.postRoles.data.map(pr => pr.id)

      

      if(dimension.id === ''){

        createDimension({
          variables: {
            "data": {
              "dimension": formData.dimension,
              "postRoles": postRolesID
            }
          },
          context: {
            headers: {
              authorization: `Bearer ${jwt}`,
            },
          },
        }).then(data => {
          

          
          let obj = dimensions.filter(d=> d.id !== dimension.id)

       

          obj.push(data.data.createDimension.data)

          
          setDimensions(obj)

          toast.success("Dimensao adicionado com sucesso!")

          setPersonName([])
          document.getElementById("dimension").value = "";

          

        }).catch(error => {
          toast.error("Ocorreu um erro ao adicionar dimensao!")
        })
        

      }else{
        
          updateDimension({
            variables: {
              "updateDimensionId": dimension.id,
              "data": {
              "dimension": formData.dimension,
              "postRoles": postRolesID
            }
            },
            context: {
              headers: {
                authorization: `Bearer ${jwt}`,
              },
            },
          }).then(data => {

            

            let obj = dimensions.filter(d=> d.id !== dimension.id)

       

          obj.push(data.data.updateDimension.data)

          
          setDimensions(obj)

            toast.success("Dimensao actualizado com sucesso!!")
          }).catch(error => {
            toast.error("Ocorreu um erro ao actualizar dimensao!!")
          })


      }


    })


  }

    return (
       
      <form onSubmit={handleSubmit(formDimension)} noValidate>
        <Grid container spacing={3} style={{marginTop: '5px'}}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              multiline
              rows={2}
              label="Dimensão"
              defaultValue={dimension.dimension}
              fullWidth
              type="text"
              name="name"
              id="dimension"
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
            <Button type="submit" size="large" variant="contained" fullWidth>
              {btnName}
            </Button>
            <ToastContainer />
          </Grid>
        </Grid>
      </form>
   
    );
}
 
export default DimensionForm;