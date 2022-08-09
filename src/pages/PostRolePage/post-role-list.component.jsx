import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const PostRoleList = ({postRoles, setPostRoles, setPostRoleEdit, postRoleEdit}) => {
    
    let postRolesSort = postRoles.sort(function(a,b){
      if(a.attributes.postRole < b.attributes.postRole){
        return -1;
      }else{
        return true;
      }
    })

    function handleClickEdit(postRoleID){
      let postRole = postRoles.find(pr => pr.id === postRoleID)
      console.log(postRole)
      setPostRoleEdit({
        postRole: postRole.attributes.postRole,
        description: postRole.attributes.description,
        id: postRoleID
      })
    }
    

    return (
        <MainCard title="Lista de Cargos">
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>

        {
          postRolesSort && postRolesSort.map(postRole => (
            <ListItem
          key={postRole.id}
          secondaryAction={
            <IconButton aria-label="edit" onClick={()=>handleClickEdit(postRole.id)} >
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary={postRole.attributes.description} secondary={postRole.attributes.postRole} />
        </ListItem>
          ))
        }
        

        


       
      </List>
    </MainCard>
    );
}
 
export default PostRoleList;