import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CustomListItem from "./custom-list-item";
import PersonIcon from "@mui/icons-material/Person";

const CustomUserList = ({ users, search }) => {

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {users &&
            users
              .filter((name) => {
                return (
                  name.attributes.name
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) >= 0
                );
              })
              .map((u) => (
                <CustomListItem
                  key={u.id}
                  id={u.id}
                  description={u.attributes.name}
                  role={u.attributes.postRole.data.attributes.postRole}
                  icon={<PersonIcon />}
                />
              ))}
        </List>
      </nav>
    </Box>
  );
};

export default CustomUserList;
