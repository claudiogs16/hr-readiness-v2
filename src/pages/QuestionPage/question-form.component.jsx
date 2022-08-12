import { Button, Grid, TextField } from "@mui/material";
import { useEffect } from "react";
import MainCard from "../../components/MainCard/main-card.component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_QUESTION } from "./mutation.gql";

const validationEmailForm = yup
    .object({
        question: yup
            .string()
            .min(6, "Questao precisa ter mais de 6 caracteres")
            .required("Indicador é obrigatorio"),
    })
    .required();


const QuestionForm = ({ indicatorID, questions, setQuestions }) => {
    const jwt = localStorage.getItem("jwtToken");


    const [createQuestion] = useMutation(CREATE_QUESTION)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationEmailForm),
    });



    const formQuestion = formData => {
        console.log(formData)

        createQuestion({
            variables: {
                "data": {
                    "question": formData.question,
                    "indicator": indicatorID
                }
            },
            context: {
                headers: {
                    authorization: `Bearer ${jwt}`,
                },
            },
        }).then(data => {
            console.log(data.data.createQuestion.data)
            let obj = questions;
            obj.push(data.data.createQuestion.data)
            setQuestions(obj);
            document.getElementById("question").value = "";
            console.log("Questao adicionado com sucesso!!")
        }).catch(error => {
            console.log("Ocorreu um erro ao adicionar questao!!")
        })
    }


    return (

        <form onSubmit={handleSubmit(formQuestion)} noValidate>
            <Grid container spacing={3} style={{ marginTop: '5px' }}>
                <Grid item xs={12}>
                    <TextField
                        autoFocus
                        required
                        multiline
                        rows={2}
                        label="Questao"
                        fullWidth
                        type="text"
                        name="question"
                        id="question"
                        {...register("question")}
                        helperText={errors.question?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button size="large" type="submit" variant="contained" fullWidth>Adicionar</Button>
                </Grid>
            </Grid>
        </form>

    );
}

export default QuestionForm;