import { useQuery } from "@apollo/client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { GET_ALL_POST_ROLE } from "../../gqloperation/query";

const CustomSelectPostRole = () => {
  const jwt = localStorage.getItem("jwtToken");

  const { loading, error, data } = useQuery(GET_ALL_POST_ROLE, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
  });

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Cargo"
      >
        <MenuItem value="0">Escolher</MenuItem>

        {data &&
          data.postRoles.data.map((pr) => (
            <MenuItem key={pr.id} value={pr.id}>
              {pr.attributes.description}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelectPostRole;
