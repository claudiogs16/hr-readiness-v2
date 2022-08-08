import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";

const DimensionList = () => {
  return (
    <MainCard title="Lista Dimensão">
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem
          key="1"
          secondaryAction={
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Administração"  />
        </ListItem>
        <ListItem
          key="2"
          secondaryAction={
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Recursos Humanos"  />
        </ListItem>
      </List>
    </MainCard>
  );
};

export default DimensionList;
