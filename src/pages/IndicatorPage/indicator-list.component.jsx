import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";
import QuizIcon from '@mui/icons-material/Quiz';
import StarRateIcon from '@mui/icons-material/StarRate';
import IndicatorForm from "./indicator-form.component";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useMemo, useState } from "react";


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

const IndicatorList = ({indicators, setIndicators}) => {
  const [open, setOpen] = useState(false)
  const [indicator, setIndicator] = useState({
    id: '',
    indicator: '',
    dimension: '',
  })

  const handleClose = () => {
    setIndicator({
      id: '',
      indicator: '',
      dimension: '',
    })
    setOpen(false)
  }


  let indicatorsSort = indicators.sort(function(a,b){
    if(a.attributes.indicator < b.attributes.indicator){
      return -1;
    }else{
      return true;
    }
  })

  function handleClickEdit(indicatorID){
    let data = indicators.find(d => d.id === indicatorID)

    setIndicator(i => {
      return {
        id: data.id,
        indicator: data.attributes.indicator,
        dimension: data.attributes.dimension.data.id
      }
    })

    setOpen(true)
    
  }




    return (
        <MainCard title="Lista de Indicadores" headerAction={<ActionForm setOpen={setOpen} />}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {
          indicatorsSort && indicatorsSort.map(indicator => (
            <ListItem
            key={indicator.id}
            secondaryAction={
              <IconButton aria-label="edit" onClick={() => handleClickEdit(indicator.id)}>
                <EditIcon />
              </IconButton>
            }
          >
            <ListItemText primary={indicator.attributes.indicator} secondary={indicator.attributes.dimension.data.attributes.dimension} />
          </ListItem> 
          ))
        }
        
        
      </List>
      <Dialog maxWidth='md' fullScreen={false} open={open} onClose={handleClose}>
        <DialogTitle>Indicador</DialogTitle>
        <DialogContent>
          
          <IndicatorForm indicator={indicator} setIndicator={setIndicator} indicators={indicators} setIndicators={setIndicators} />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          
        </DialogActions>
      </Dialog>
    </MainCard>
    );
}
 
export default IndicatorList;