import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";

const QuestionRatingItem = ({rate}) => {
    const [values, setValues] = useState('');

    const handleChange = e => {
setValues(e.target.value)
    }
    return (
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Pontuacao</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={values}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">{rate}</InputAdornment>}
          />
        </FormControl>
    );
}
 
export default QuestionRatingItem;