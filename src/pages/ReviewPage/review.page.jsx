import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import BackButton from "../../components/Button/back-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import {
  GET_ANSWSER_AND_QUESTION_BY_DIMENSION,
  GET_EVALUATORS_BY_ID,
  GET_POST_ROLEID_BY_EVALUATORS_ID,
} from "../../gqloperation/query";
import Loading from "../../components/Loading/loading.component";
import CustomButton from "../../components/Button/custom-button.component";
import { useHref } from "react-router-dom";
import { CREATE_RATING } from "../../gqloperation/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jwt = localStorage.getItem("jwtToken");

const ListReview = ({
  answer,
  question,
  evaluatorID,
  refReviews,
  refCountQuestion,
  setDisabled,
}) => {
  const handleChange = (e) => {
    // console.log(e.target.value);

    let filtered = refReviews.current.filter(
      (re) => re.question !== question.id
    );

    filtered.push({
      question: question.id,
      answer: e.target.value,
      evaluator: evaluatorID,
    });

    refReviews.current = filtered;

    if (refReviews.current.length === refCountQuestion.current)
      setDisabled(false);
  };

  if (answer.data.length === 0) return <></>;
  if (!question) return <></>;

  if (answer.data.length > 0 && question) {
    refCountQuestion.current++;
  }

  return (
    <Grid container spacing={3} style={{ marginBottom: "30px" }}>
      <Grid item xs={12}>
        <Typography>{question.attributes.question}</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={handleChange}
          >
            {answer.data.map((answer) => (
              <FormControlLabel
                key={answer.id}
                value={answer.id}
                control={<Radio />}
                label={answer.attributes.answer}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

const ReviewPage = ({ evaluatorID }) => {
  const [loading, setLoading] = useState(true);
  const [dimensions, setDimensions] = useState([]);
  const refReviews = useRef([]);
  const refCountQuestion = useRef(0);
  const [disabled, setDisabled] = useState(true);
  const [postRole, setPostRole] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [getPostRoleID] = useLazyQuery(GET_POST_ROLEID_BY_EVALUATORS_ID);
  const [getQuestionAnswer] = useLazyQuery(
    GET_ANSWSER_AND_QUESTION_BY_DIMENSION
  );
  const [createRating] = useMutation(CREATE_RATING);

  evaluatorID = 49;

  useEffect(() => {
    getPostRoleID({
      variables: {
        filters: {
          id: {
            eq: evaluatorID,
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
      let { id: postRoleID } =
        d.data.evaluators.data[0].attributes.periods.data.attributes.employeer
          .data.attributes.postRole.data;

      setPostRole(
        d.data.evaluators.data[0].attributes.periods.data.attributes.employeer
          .data.attributes.postRole.data.attributes.postRole
      );
      setName(
        d.data.evaluators.data[0].attributes.periods.data.attributes.employeer
          .data.attributes.name
      );
      setDescription(d.data.evaluators.data[0].attributes.periods.data.attributes.description)
      getQuestionAnswer({
        variables: {
          filters: {
            postRoles: {
              id: {
                eq: postRoleID,
              },
            },
            isActive: {
              eq: true,
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
        setDimensions(d.data.dimensions);
        setLoading(false);
      });
    });
  }, []);

  const handleClickFinished = () => {
    // console.log(refReviews.current)
    refReviews.current.map((review) => {
      createRating({
        variables: {
          data: {
            question: review.question,
            answer: review.answer,
            evaluator: review.evaluator,
          },
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
        fetchPolicy: "network-only",
      });
    });
    toast.success("Avaliação efectuado!!");
  };

  if (loading) return <Loading />;

  return (
    <MainContainer title="Avaliação" maxWidth="sm">
      <MainCard title={<BackButton />}>
        <Grid container spacing={3} style={{ marginBottom: "40px" }}>
          <Grid item xs={12}>
            <TextField
              id="name"
              disabled
              multiline
              rows={2}
              label="Descrição"
              defaultValue={description}
              fullWidth
              type="text"
              name="name"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              id="name"
              disabled
              label="Funcionário"
              defaultValue={name}
              fullWidth
              type="text"
              name="name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="name"
              label="Cargo"
              disabled
              fullWidth
              type="text"
              name="name"
              defaultValue={postRole}
            />
          </Grid>
        </Grid>
        {dimensions &&
          dimensions.data.map((dimension) => (
            <div key={dimension.id}>
              {dimension &&
                dimension.attributes.indicators.data.map((indicator) => (
                  <div key={indicator.id}>
                    {indicator &&
                      indicator.attributes.questions.data.map((question) => (
                        <ListReview
                          key={question.id}
                          answer={indicator.attributes.answers}
                          question={question}
                          evaluatorID={evaluatorID}
                          refReviews={refReviews}
                          refCountQuestion={refCountQuestion}
                          setDisabled={setDisabled}
                        />
                      ))}
                  </div>
                ))}
            </div>
          ))}
        <Grid container>
          <Grid item xs={12}>
            <Button
              size="large"
              disabled={disabled}
              variant="contained"
              fullWidth
              onClick={handleClickFinished}
            >
              Finalizar
            </Button>
            <ToastContainer />
          </Grid>
        </Grid>
      </MainCard>
    </MainContainer>
  );
};

export default ReviewPage;
