import { useLazyQuery, useMutation } from "@apollo/client";
import { Button, FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { useEffect, useRef } from "react";
import { GET_ANSWER } from "./query.gql";
import { CREATE_ANSWER, UPDATE_ANSWER } from "./mutation.gql";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";





const QuestionRatingItem = ({ rate, indicatorID }) => {
  const jwt = localStorage.getItem("jwtToken");
  const refAnswer = useRef("")
  const refAnswerID = useRef("");
  const [visibility, setVisibility] = useState('hidden');



  const [getAnswer] = useLazyQuery(GET_ANSWER)
  const [createAnswer] = useMutation(CREATE_ANSWER)
  const [updateAnswer] = useMutation(UPDATE_ANSWER)



  const handleChangeAnswer = () => {
    setVisibility("");
  }



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


        if (answerData.length !== 0) {
          refAnswer.current.value = answerData[0].attributes.answer;
          refAnswerID.current = answerData[0].id;

        } else {
          refAnswer.current.value = '';
          refAnswerID.current = '';
        }



      }).catch(error => {
        toast.error("Ocorreu um erro ao carregar pontuacoes!!")
      })


  }, [indicatorID])


  const handleClickSave = () => {


    if (refAnswer.current.value === '') {
      toast.warning("Inserir pontuacao!!")
      return false;
    }

    if (refAnswerID.current === '') {
      createAnswer({
        variables: {
          "data": {
            "rate": parseInt(rate),
            "answer": refAnswer.current.value,
            "indicator": indicatorID
          }
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      }).then(data => {
        
        refAnswerID.current = data.data.createAnswer.data.id;
        setVisibility("hidden");
        toast.success("Pontuacao adicionado com sucesso!!")
      }).catch(error => {
        toast.error("Ocorreu um erro ao adicionar pontuacao")
      })



    } else {

      updateAnswer({
        variables: {
          "updateAnswerId": refAnswerID.current,
          "data": {
            "answer": refAnswer.current.value
          }
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      }).then(data => {
        setVisibility("hidden");
        toast.success("Pontuacao Actualizado com sucesso!!")
      }).catch(error => {
        toast.error("Ocorreu um erro ao actualizar pontuacao!!")
      })


    }


  }



  return (
    <form noValidate>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Pontuacao</InputLabel>
        <Input
          inputRef={refAnswer}
          multiline
          onChange={handleChangeAnswer}
          rows={2}
          id="answer"
          name="answer"
          startAdornment={<InputAdornment position="start">{rate}</InputAdornment>}


        />
      </FormControl>
      <Button style={{visibility: visibility}} onClick={handleClickSave} type="button" >Salvar</Button>
      <ToastContainer />
    </form>
  );
}

export default QuestionRatingItem;