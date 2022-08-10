import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_POST_ROLES } from "./query.gql";

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


const DimensionForm = () => {

  const jwt = localStorage.getItem("jwtToken");
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [names, setNames] = useState([]);

  const [getPostRoles] = useLazyQuery(GET_POST_ROLES)

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

  useEffect(()=>{
    getPostRoles({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: 'network-only' 
    }).then(data => {
      // console.log(data.data.postRoles.data)
      let postRoleList = data.data.postRoles.data;
      
      // console.log(postRoleList)

      setNames(postRoleList.map(rl=>rl.attributes.postRole))
      // console.log(names)
    }).catch(error=>{
      console.log("Erro ao carregar dados")
    })
  },[])

    return (
       
      <form action="">
        <Grid container spacing={3} style={{marginTop: '5px'}}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              multiline
              rows={2}
              label="Dimensão"
              defaultValue=""
              fullWidth
              type="text"
              name="name"
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
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </form>
   
    );
}
 
export default DimensionForm;