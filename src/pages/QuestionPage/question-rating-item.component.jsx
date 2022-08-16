import { useLazyQuery, useMutation } from "@apollo/client";
import { Button, FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { GET_ANSWER } from "./query.gql";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_ANSWER } from "./mutation.gql";


const validationEmailForm = yup
  .object({
    answer: yup
      .string()
      .min(6, "Resposta precisa ter mais de 6 caracteres")
      .required("Resposta é obrigatorio"),
  })
  .required();



const QuestionRatingItem = ({ rate, indicatorID }) => {
  const jwt = localStorage.getItem("jwtToken");
  const [answer, setAnswer] = useState("")
  const [answerID, setAnswerID] = useState("")



  const [getAnswer] = useLazyQuery(GET_ANSWER)
  const [createAnswer] = useMutation(CREATE_ANSWER)



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });


  useEffect(() => {
    if (indicatorID !== "")
      getAnswer({
        variables: {
          "filters": {
            "rate": {
              "eq": parseInt(rate)
            },
            "indicator": {
              "id": {
                "eq": indicatorID
              }
            }
          }
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
        fetchPolicy: 'network-only'
      }).then(data => {

        let answerData = data.data.answers.data;
        console.log(answerData)

        if (answerData.lenght > 0) {
          setAnswer(answerData.attributes.answer)
        }

        console.log(answer)

      }).catch(error => {
        console.log(error)
      })

      
  }, [indicatorID])


  const formAnswer = formData => {
    console.log(formData)
    createAnswer({
      variables: {
        "data": {
          "rate": rate,
          "answer": formData.answer,
          "indicator": indicatorID
        }
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <form onSubmit={handleSubmit(formAnswer)} noValidate>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Pontuacao</InputLabel>
        <Input
          defaultValue={answer}
          id="answer"
          name="answer"
          startAdornment={<InputAdornment position="start">{rate}</InputAdornment>}
          {...register("answer")}

        />
      </FormControl>
      <Button type="submit" >Salvar</Button>
    </form>
  );
}

export default QuestionRatingItem;