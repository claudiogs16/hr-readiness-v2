import { Grid } from "@mui/material";
import QuestionForm from "./question-form.component";
import QuestionList from "./question-list.component";
import QuestionRating from "./question-rating.component";
import SelectIndicator from "./SelectIndicator.component";

const QuestionPage = () => {
    return (
        <Grid container  maxWidth="lg" style={{ margin: "0 auto" }}>
        
          
            <Grid item xs={12} md={4} ><SelectIndicator /></Grid>
            <Grid item xs={12} md={1} ></Grid>
            <Grid item xs={12} md={7} ><QuestionList /></Grid>
            <Grid item xs={12}  ><QuestionRating /></Grid>
          
        
        
        
        
      </Grid>  
    );
}
 
export default QuestionPage;