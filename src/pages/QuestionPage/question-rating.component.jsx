import { useLazyQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import MainCard from "../../components/MainCard/main-card.component";
import { GET_ANSWER } from "./query.gql";
import QuestionRatingItem from "./question-rating-item.component";

const QuestionRating = ({ indicatorID }) => {
    const jwt = localStorage.getItem("jwtToken");

    

    const [getAnswers] = useLazyQuery(GET_ANSWER);


    if(indicatorID === '') return <></>


    return (
        <MainCard title="Pontuacoes">
            <Grid container spacing={3}>

                <Grid key={0} item md={4} sm={6} xs={12}>
                    <QuestionRatingItem rate="0" indicatorID={indicatorID} />
                </Grid>
                <Grid key={1} item md={4} sm={6} xs={12}>
                    <QuestionRatingItem rate="1" indicatorID={indicatorID} />
                </Grid>
                <Grid key={2} item md={4} sm={6} xs={12}>
                    <QuestionRatingItem rate="2" indicatorID={indicatorID} />
                </Grid>
                <Grid key={3} item md={4} sm={6} xs={12}>
                    <QuestionRatingItem rate="3" indicatorID={indicatorID} />
                </Grid>
                <Grid key={4} item md={4} sm={6} xs={12}>
                    <QuestionRatingItem rate="4" indicatorID={indicatorID} />
                </Grid>
                <Grid key={5} item md={4} sm={6} xs={12}>
                    <QuestionRatingItem rate="5" indicatorID={indicatorID} />
                </Grid>

            </Grid>
        </MainCard>
    );
}

export default QuestionRating;