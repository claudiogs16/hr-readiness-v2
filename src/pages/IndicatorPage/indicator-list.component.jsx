import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";
import QuizIcon from '@mui/icons-material/Quiz';
import StarRateIcon from '@mui/icons-material/StarRate';


const IndicatorList = () => {
    return (
        <MainCard title="Lista de Indicadores">
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem
          key="1"
          secondaryAction={
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Indicador A" secondary="Administracao" />
        </ListItem>
        <ListItem
          key="2"
          secondaryAction={
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Indicador B" secondary="Recursos Humanos" />
        </ListItem>
      </List>
    </MainCard>
    );
}
 
export default IndicatorList;