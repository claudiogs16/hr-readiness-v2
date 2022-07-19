import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CustomSelectItem from "./custom-select-item.component";

const CustomSelect = ({ label, values }) => {
  console.log(values);
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
      >
        {values && values.map((v) => <CustomSelectItem items={v} />)}

      </Select>
    </FormControl>
  );
};

export default CustomSelect;
