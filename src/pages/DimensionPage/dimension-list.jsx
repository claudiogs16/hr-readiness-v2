import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import DimensionForm from "./dimension-form";
import { useLazyQuery } from "@apollo/client";
import { GET_DIMENSIONS } from "./query.gql";

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


const DimensionList = ({dimensions, setDimensions}) => {
  const [open, setOpen] = useState(false)
  const [dimension,setDimension] = useState({
    id: '',
    dimension: '',
    postRoles: []
  });

  

  let dimensionsSort = dimensions.sort(function(a,b){
    if(a.attributes.dimension < b.attributes.dimension){
      return -1;
    }else{
      return true;
    }
  })

  function handleClickEdit(dimensionID){
    let data = dimensions.find(d => d.id === dimensionID)
    let postRoles = [];
    postRoles = data.attributes.postRoles.data.map(pr=> pr.attributes.postRole)
   
    setDimension(d => {
      return {
        id: data.id,
        dimension: data.attributes.dimension,
        postRoles: postRoles
      }
    })
    

    setOpen(true)
  }
  

  const handleClose = () => {
    setDimension({
      id: '',
      dimension: '',
      postRoles: []
    })
    setOpen(false)
  }

  return (
    <MainCard title="Lista Dimensão" headerAction={<ActionForm setOpen={setOpen} />}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {
          dimensionsSort && dimensionsSort.map(dimension => (
            <ListItem
          key={dimension.id}
          secondaryAction={
            <IconButton aria-label="edit" onClick={()=>handleClickEdit(dimension.id)}>
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary={dimension.attributes.dimension}  />
        </ListItem>
          ))
        }
        
        
      </List>
      <Dialog maxWidth='md' fullScreen={false} open={open} onClose={handleClose}>
        <DialogTitle>Cargo</DialogTitle>
        <DialogContent>
          
          <DimensionForm dimension={dimension} setDimension={setDimension} dimensions={dimensions} setDimensions={setDimensions} />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default DimensionList;
