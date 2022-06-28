import TextField from '@mui/material/TextField';

const CustomTextField = props => {
  return (
    <TextField
      required
      id="outlined-required"
      label={props.label}
      defaultValue=""
      fullWidth
    />
  );
};

export default CustomTextField;