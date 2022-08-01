import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const ListAction = ({id}) => {
  const navigate = useNavigate();
  return (
    <IconButton onClick={()=> navigate("edit/"+id)} edge="end" aria-label="edit">
      <EditIcon  />
    </IconButton>
  );
};

const CustomListItem = ({ icon, description, role, id }) => {
  return (
    <ListItem disablePadding secondaryAction={<ListAction id={id} />}>
      <ListItemButton>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={description} secondary={role} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
