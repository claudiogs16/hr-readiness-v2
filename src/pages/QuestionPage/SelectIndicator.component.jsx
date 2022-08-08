import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";

const SelectIndicator = () => {
    return (
        <MainCard title="Selecionar Indicador">
            <FormControl fullWidth>
              <InputLabel id="select-post-role-input-label">Indicador</InputLabel>
              <Select
                labelId="select-post-role-label"
                id="select-post-role"
                value=""
                label="Cargo"
                
              ></Select>
            </FormControl>
        </MainCard>
    );
}
 
export default SelectIndicator;