import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import CustomButton from "../../components/Button/custom-button.component";
import CustomSelect from "../../components/Select/custom-select.component";
import {
  GET_ALL_DIMENSIOS,
  GET_ALL_INDICATOR,
  GET_QUESTION_BY_ID,
} from "../../gqloperation/query";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_QUESTION, UPDATE_QUESTION } from "../../gqloperation/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const validationEmailForm = yup
  .object({
    question: yup
      .string()
      .min(3, "Questão precisa ter mais de 3 caracteres")
      .required("Questão é obrigatorio"),
  })
  .required();

const QuestionFormEdit = () => {
  const jwt = localStorage.getItem("jwtToken");
  const { questionID } = useParams();
  const [status, setStatus] = useState(false);
  const [question, setQuestion] = useState("");

  const msnSuccess = () => toast.success("Questão actualizado com sucesso!!");
  const msnError = () => toast.error("Erro ao actualizar questão!!");

  const [getQuestion] = useLazyQuery(GET_QUESTION_BY_ID);
  const [updateQuestion] = useMutation(UPDATE_QUESTION);

  useEffect(() => {
    getQuestion({
      variables: {
        filters: {
          id: {
            eq: questionID,
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
      setQuestion(d.data.questions.data[0].attributes.question);
      setStatus(d.data.questions.data[0].attributes.isActive);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const formQuestion = ({ question }) => {
  
    updateQuestion({
      variables: {
        updateQuestionId: questionID,
        data: {
          question: question,
          isActive: status,
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then(d=>{
        msnSuccess();
    }).catch(e=>{
        msnError();
    });
  };

  return (
    <form onSubmit={handleSubmit(formQuestion)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="question"
            required
            label="Questão"
            defaultValue={question}
            fullWidth
            multiline
            rows={2}
            InputLabelProps={{
              shrink: true,
            }}
            type="text"
            name="question"
            {...register("question")}
            helperText={errors.question?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="select-status-dimension-input-label">
              estado
            </InputLabel>
            <Select
              labelId="select-status-label"
              id="select-status-dimension"
              value={status}
              label="estado"
              onChange={handleStatusChange}
            >
              <MenuItem value={true}>Activo</MenuItem>
              <MenuItem value={false}>Inactivo</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <CustomButton type="submit" name="Actualizar" />
          <ToastContainer />
        </Grid>
      </Grid>
    </form>
  );
};

export default QuestionFormEdit;
