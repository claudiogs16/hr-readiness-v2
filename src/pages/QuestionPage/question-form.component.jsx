import { Button, Grid, TextField } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";

const QuestionForm = () => {
    return (


        <Grid container spacing={3} style={{marginTop: '5px'}}>
            <Grid item xs={12}>
                <TextField
                    autoFocus
                    required
                    multiline
                    rows={2}
                    label="Questao"
                    defaultValue=""
                    fullWidth
                    type="text"
                    name="name"
                />
            </Grid>
            <Grid item xs={12}>
                <Button size="large" type="submit" variant="contained" fullWidth>Adicionar</Button>
            </Grid>
        </Grid>

    );
}

export default QuestionForm;