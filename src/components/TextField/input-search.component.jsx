import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const InputSearch = ({ search, handleChangeSearch }) => {
  return (
    <TextField
      value={search}
      onChange={handleChangeSearch}
      id="input-with-icon-textfield"
      label="Pesquisar"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
};

export default InputSearch;
