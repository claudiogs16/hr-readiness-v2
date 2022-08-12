import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useMemo, useState } from "react";
import QuestionForm from "./question-form.component";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_ANSWER, GET_QUESTION } from "./query.gql";
import { DELETE_QUESTION } from "./mutation.gql";


const ActionForm = ({ setOpen }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Tooltip title="Adicionar Novo" placement="right">
      <IconButton
        color="info"
        aria-label="Add"
        component="span"
        onClick={handleClickOpen}
      >
        <AddCircleIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  );
};


const QuestionList = ({indicatorID}) => {
  const jwt = localStorage.getItem("jwtToken");
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false)
    const [questions, setQuestions] = useState([])
    const [questionDeleteID, setQuestionDeleteID] = useState("")
    const [ratings, setRatings] = useState([])

    const handleClose = () => {
      setOpen(false)
    }

    const handleCloseConfirm = () => {
      setQuestionDeleteID("");
      setOpenConfirm(false)
    }


    const [getQuestions] = useLazyQuery(GET_QUESTION)
    const [getAnswer] = useLazyQuery(GET_ANSWER)
    const [deleteQuestion] = useMutation(DELETE_QUESTION)


    useEffect(()=>{
      getQuestions({
        variables: {
          "filters": {
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
        console.log(data.data.questions.data)
        setQuestions(data.data.questions.data)
      }).catch(error => {
        console.log("Ocorreu um erro ao carregar questao!!")
      })


      getAnswer({
        variables: {
          "filters": {
            "indicator": {
              "id": {
                "eq": null
              }
            }
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


    },[indicatorID])


    function handleClickDeleteQuestion(questionID){
      setQuestionDeleteID(questionID)
      setOpenConfirm(true)
      
    }

    const handleClickConfirmDelete = () => {
      console.log("Eliminando..... "+questionDeleteID)

      deleteQuestion({
        variables: {
          "deleteQuestionId": questionDeleteID
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      }).then(data=>{
        let newQuestions = questions.filter(q => q.id !== questionDeleteID)
        setQuestions(newQuestions)
        setQuestionDeleteID("")
        setOpenConfirm(false)
      }).catch(error=> {
        console.log("Ocorreu um erro ao eliminar questao!!")
      })

      
    }


    return (
        <MainCard title="Lista de Questoes" headerAction={<ActionForm setOpen={setOpen} />}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        
        {
          questions && questions.map(question => (
            <ListItem
            key={question.id}
            secondaryAction={
              <IconButton aria-label="edit" onClick={()=>handleClickDeleteQuestion(question.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={question.attributes.question} />
          </ListItem>
          ))
        }

       


      </List>
      <Dialog maxWidth='md' fullScreen={false} open={open} onClose={handleClose}>
        <DialogTitle>Questao</DialogTitle>
        <DialogContent>
          
          <QuestionForm indicatorID={indicatorID} questions={questions} setQuestions={setQuestions} />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          
        </DialogActions>
      </Dialog>

      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          Questao
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja continuar com a eliminacao?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickConfirmDelete} autoFocus>Eliminar</Button>
          <Button onClick={handleCloseConfirm} >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>

    </MainCard>
    );
}
 
export default QuestionList;