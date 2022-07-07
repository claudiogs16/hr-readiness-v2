import TextField from '@mui/material/TextField';

const CustomTextField = ({label, name, ...other}) => {
  return (
    <TextField
      required
      id="outlined-required"
      label={label}
      defaultValue=""
      fullWidth
      name={name}
      {...other}
    />
  );
};

export default CustomTextField;