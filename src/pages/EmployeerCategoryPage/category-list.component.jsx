import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";

const CategoryList = () => {
    return (
        <MainCard title="Lista Categoria">
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem
          key="1"
          secondaryAction={
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Director Executivo" secondary="CEO" />
        </ListItem>
        <ListItem
          key="2"
          secondaryAction={
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Programador" secondary="Programmer" />
        </ListItem>
      </List>
    </MainCard>
    );
}
 
export default CategoryList;