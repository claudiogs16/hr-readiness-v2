import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  GET_ANSWER_BY_ID_AND_INDICATOR,
  GET_INDICATOR_BY_ID,
} from "../../gqloperation/query";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_ANSWER, UPDATE_ANSWER } from "../../gqloperation/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const jwt = localStorage.getItem("jwtToken");

const InputRating = ({ rate, indicatorID }) => {
  const inputRating = useRef("");
  const answerID = useRef();
  const [isExists, SetIsExists] = useState(false);

  const msnSuccess = () => toast.success("Resposta foi guardado com sucesso!!");
  const msnError = () => toast.error("Erro ao salvar resposta!!");

  const [getAnswer] = useLazyQuery(GET_ANSWER_BY_ID_AND_INDICATOR);
  const [createAnswer] = useMutation(CREATE_ANSWER);
  const [updateAnswer] = useMutation(UPDATE_ANSWER);

  useEffect(() => {
    getAnswer({
      variables: {
        filters: {
          rate: {
            eq: rate,
          },
          indicator: {
            id: {
              eq: indicatorID,
            },
          },
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then((d) => {
      let { length } = d.data.answers.data;
      //   console.log(d.data.answers.data[0].id);
      if (length > 0) {
        inputRating.current.value = d.data.answers.data[0].attributes.answer;
        SetIsExists(true);
        answerID.current = d.data.answers.data[0].id;
        
      }
    });
  }, []);

  const handleClickSave = () => {
    if (!isExists) {
      createAnswer({
        variables: {
          data: {
            rate: rate,
            answer: inputRating.current.value,
            indicator: indicatorID,
          },
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
        fetchPolicy: "network-only",
      })
        .then((d) => {
          msnSuccess();
        })
        .catch((e) => {
          msnError();
        });
    } else {
      updateAnswer({
        variables: {
          updateAnswerId: answerID.current,
          data: {
            answer: inputRating.current.value,
          },
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
        fetchPolicy: "network-only",
      }).then(d=>{
        msnSuccess()
      }).catch(e=>{
        msnError()
      });
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="rating">Resposta</InputLabel>
          <Input
            inputRef={inputRating}
            type="text"
            id="rate"
            name="rate"
            defaultValue=""
            startAdornment={
              <InputAdornment position="start">
                {rate.toString()}
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "right" }}>
        <Button onClick={handleClickSave}>Salvar</Button>
        <ToastContainer />
      </Grid>
    </Grid>
  );
};

const IndicatorRating = () => {
  const { indicatorID } = useParams();

  const {
    loading: loadingGetIndicatorById,
    error: errorGetIndicatorById,
    data: dataGetIndicatorById,
  } = useQuery(GET_INDICATOR_BY_ID, {
    variables: {
      filters: {
        id: {
          eq: indicatorID,
        },
      },
    },
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
  });

  if (loadingGetIndicatorById) return <h1>Carregando...</h1>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          id="dimension"
          required
          label="Dimensão"
          defaultValue={
            dataGetIndicatorById.indicators.data[0].attributes.dimension.data
              .attributes.dimension
          }
          fullWidth
          disabled
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          name="dimension"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="indicator"
          required
          label="Indicador"
          defaultValue={
            dataGetIndicatorById.indicators.data[0].attributes.indicator
          }
          fullWidth
          disabled
          multiline
          rows={2}
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          name="indicator"
        />
      </Grid>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <Typography variant="body2">Respostas:</Typography>
      </Grid>
     
      <Grid item xs={12}>
        
        <InputRating id="0" key={0} rate={0} indicatorID={indicatorID} />
        <InputRating id="1" key={1} rate={1} indicatorID={indicatorID} />
        <InputRating id="2" key={2} rate={2} indicatorID={indicatorID} />
        <InputRating id="3" key={3} rate={3} indicatorID={indicatorID} />
        <InputRating id="4" key={4} rate={4} indicatorID={indicatorID} />
        <InputRating id="5" key={5} rate={5} indicatorID={indicatorID} />
        
      </Grid>
    </Grid>
  );
};

export default IndicatorRating;
