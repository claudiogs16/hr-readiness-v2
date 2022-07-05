import { Grid, TextField } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import CustomSelect from "../../components/Select/custom-select.component";

const QuestionForm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CustomSelect label="Indicador" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          label="Questão"
          multiline
          rows={2}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <CustomButton name="Adicionar" />
      </Grid>
    </Grid>
  );
};

export default QuestionForm;
