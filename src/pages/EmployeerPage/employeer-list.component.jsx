import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";

const EmployeerList = () => {
  return (
    <MainCard title="Lista Funcionário">
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem
          key="1"
          secondaryAction={
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Vitor Mendes Pereira" secondary="CEO" />
        </ListItem>
        <ListItem
          key="2"
          secondaryAction={
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Cláudio Gomes" secondary="Programmer" />
        </ListItem>
      </List>
    </MainCard>
  );
};

export default EmployeerList;
