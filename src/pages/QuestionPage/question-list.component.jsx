import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useMemo, useState } from "react";
import QuestionForm from "./question-form.component";
import { useLazyQuery } from "@apollo/client";
import { GET_QUESTION } from "./query.gql";

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
    const [questions, setQuestions] = useState([])

    const handleClose = () => {
      setOpen(false)
    }


    const [getQuestions] = useLazyQuery(GET_QUESTION)


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
    },[indicatorID])


    return (
        <MainCard title="Lista de Questoes" headerAction={<ActionForm setOpen={setOpen} />}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        
        {
          questions && questions.map(question => (
            <ListItem
            key={question.id}
            secondaryAction={
              <IconButton aria-label="edit">
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
          
          <QuestionForm />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          
        </DialogActions>
      </Dialog>
    </MainCard>
    );
}
 
export default QuestionList;