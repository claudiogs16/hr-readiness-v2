import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CustomListItem from "./custom-list-item";
import PersonIcon from "@mui/icons-material/Person";

const CustomUserList = ({ users }) => {
  
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {users &&
            users.map((t) => (
              <CustomListItem
                key={t.id}
                description={t.attributes.name}
                icon={<PersonIcon />}
              />
            ))}
        </List>
      </nav>
    </Box>
  );
};

export default CustomUserList;
