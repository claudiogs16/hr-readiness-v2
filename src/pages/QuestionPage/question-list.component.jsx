import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

const QuestionList = () => {
    return (
        <MainCard title="Lista de Questoes">
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem
          key="1"
          secondaryAction={
            <IconButton aria-label="edit">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Qual e o estado de implementacao da estrategia digital dos portos de Cabo Verde?" secondary="Indicador A" />
        </ListItem>
        <ListItem
          key="2"
          secondaryAction={
            <IconButton aria-label="edit">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Qual e o estado de implementacao  dos seus modelos  de negocio digital?" secondary="Indicador B" />
        </ListItem>
      </List>
    </MainCard>
    );
}
 
export default QuestionList;