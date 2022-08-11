import { useLazyQuery } from "@apollo/client";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import { useState } from "react";
import MainCard from "../../components/MainCard/main-card.component";
import { GET_INDICATOR } from "./query.gql";

const SelectIndicator = () => {
  const [indicators, setIndicators] = useState([]);

  const [getIndicators] = useLazyQuery(GET_INDICATOR)





    return (
        <MainCard title="Selecionar Indicador">
            <FormControl fullWidth>
              <InputLabel id="select-post-role-input-label">Indicador</InputLabel>
              <Select
                labelId="select-post-role-label"
                id="select-post-role"
                value=""
                label="Cargo"
                
              >

                
              </Select>
            </FormControl>
        </MainCard>
    );
}
 
export default SelectIndicator;