import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
} from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";
import { useContext, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { PostRoleContext } from "../../contexts/postRole-context";
import PostRoleForm from "./post-role-form.component";

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

const PostRoleList = () => {
  const [open, setOpen] = useState(false);
  const { postRoles, setPostRole } = useContext(PostRoleContext);

  const handleClose = () => {
    setPostRole({
      postRole: '',
      description: '',
      id: '',
    });
    setOpen(false);
  };

  let postRolesSort = postRoles.sort(function (a, b) {
    if (a.attributes.postRole < b.attributes.postRole) {
      return -1;
    } else {
      return true;
    }
  });

  function handleClickEdit(postRoleID) {
    let data = postRoles.find((pr) => pr.id === postRoleID);
    setPostRole({
      postRole: data.attributes.postRole,
      description: data.attributes.description,
      id: data.id,
    });
    setOpen(true);
  }

  return (
    <MainCard
      title="Lista de Cargos"
      headerAction={<ActionForm setOpen={setOpen} />}
    >
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {postRolesSort &&
          postRolesSort.map((postRole) => (
            <ListItem
              key={postRole.id}
              secondaryAction={
                <IconButton
                  aria-label="edit"
                  onClick={() => handleClickEdit(postRole.id)}
                >
                  <EditIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={postRole.attributes.description}
                secondary={postRole.attributes.postRole}
              />
            </ListItem>
          ))}
      </List>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Formulário Cargo</DialogTitle>
        <DialogContent>
          <PostRoleForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default PostRoleList;
