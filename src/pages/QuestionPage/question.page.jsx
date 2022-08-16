import { Grid } from "@mui/material";
import { useState } from "react";
import QuestionList from "./question-list.component";
import QuestionRating from "./question-rating.component";
import SelectIndicator from "./SelectIndicator.component";

const QuestionPage = () => {

    const [dimensions, setDimensions] = useState([])
    const [indicatorID, setIndicatorID] = useState("");

    return (
        <Grid container maxWidth="lg" style={{ margin: "0 auto" }}>


            <Grid item xs={12} md={4} ><SelectIndicator dimensions={dimensions} setDimensions={setDimensions} indicatorID={indicatorID} setIndicatorID={setIndicatorID} /></Grid>
            <Grid item xs={12} md={1} ></Grid>
            <Grid item xs={12} md={7} ><QuestionList indicatorID={indicatorID} /></Grid>
            <Grid item xs={12}  ><QuestionRating indicatorID={indicatorID} /></Grid>


        </Grid>
    );
}

export default QuestionPage;