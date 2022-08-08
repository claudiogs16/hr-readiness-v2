import { Grid } from "@mui/material";
import QuestionForm from "./question-form.component";
import QuestionList from "./question-list.component";
import QuestionRating from "./question-rating.component";
import SelectIndicator from "./SelectIndicator.component";

const QuestionPage = () => {
    return (
        <Grid container spacing={5} maxWidth="lg" style={{ margin: "0 auto" }}>
        <Grid item xs={12} md={5}>
          <Grid container>
            <Grid xs={12} ><SelectIndicator /></Grid>
            <Grid xs={12}><QuestionForm /></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
        <Grid container>
            <Grid xs={12}><QuestionList /></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
        <Grid container>
            <Grid xs={12}><QuestionRating /></Grid>
          </Grid>
        </Grid>
        
      </Grid>  
    );
}
 
export default QuestionPage;