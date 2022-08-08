import { Grid } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import QuestionRatingItem from "./question-rating-item.component";

const QuestionRating = () => {
    return (
        <MainCard title="Pontuacoes">
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <QuestionRatingItem rate="0" />
                </Grid>
                <Grid item xs={4}>
                    <QuestionRatingItem rate="1" />
                </Grid>
                <Grid item xs={4}>
                    <QuestionRatingItem rate="2" />
                </Grid>
                <Grid item xs={4}>
                    <QuestionRatingItem rate="3" />
                </Grid>
                <Grid item xs={4}>
                    <QuestionRatingItem rate="4" />
                </Grid>
                <Grid item xs={4}>
                    <QuestionRatingItem rate="5" />
                </Grid>
                
            </Grid>
        </MainCard>
    );
}
 
export default QuestionRating;