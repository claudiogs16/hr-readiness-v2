import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EmployeerForm from "./employeer-form.component";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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


const EmployeerList = ({employeers, setEmployeers}) => {

  const [open,setOpen] = useState(false)
  const [employeer, setEmployeer] = useState({
    id: '',
    name: '',
    email: '',
    contact: '',
    start_date: '',
    postRole: '',
    userRole: '',
    blocked: ''
  })


  const handleClose = () => {
    setEmployeer({
      id: '',
    name: '',
    email: '',
    contact: '',
    start_date: '',
    postRole: '',
    userRole: '',
    status: ''
    })
    setOpen(false)
  }

  function handleClickEdit(employeerID){
    let data = employeers.find(em => em.id === employeerID)


    setEmployeer({
      id: data.id,
      name: data.attributes.name,
      email: data.attributes.email,
      contact: data.attributes.contact,
      start_date: data.attributes.start_date,
      postRole: data.attributes.postRole.data.id,
      userRole: data.attributes.userRole.data.id,
      blocked: data.attributes.blocked
    })

    setOpen(true)

  }
  


  let employeersSort = employeers.sort(function(a,b){
    if(a.attributes.name < b.attributes.name){
      return -1;
    }else{
      return true;
    }
  })

  return (
    <MainCard title="Lista Funcionário" headerAction={<ActionForm setOpen={setOpen} />}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {
          employeersSort && employeersSort.map(employeer=>(
            <ListItem
            key={employeer.id}
            secondaryAction={
            <IconButton aria-label="edit" onClick={()=>handleClickEdit(employeer.id)}>
              <EditIcon />
            </IconButton>
          }
          >
          <ListItemText primary={employeer.attributes.name} secondary={employeer.attributes.postRole.data.attributes.postRole} />
          </ListItem>
          ))
        }
        
      </List>
      <Dialog maxWidth='md' fullScreen={false} open={open} onClose={handleClose}>
        <DialogTitle>Formulário Funcionario</DialogTitle>
        <DialogContent>
          
          <EmployeerForm employeer={employeer} setEmployeer={setEmployeer} employeers={employeers} setEmployeers={setEmployeers} />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default EmployeerList;
