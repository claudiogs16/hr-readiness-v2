import { useQuery } from "@apollo/client";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import CustomAccordion from "../../components/Accordion/custom-accordion.component";
import CustomList from "../../components/List/custom-list.component";
import CustomUserList from "../../components/List/custom-user-list.component";
import Loading from "../../components/Loading/loading.component";
import { GET_ALL_USER_ROLE } from "../../gqloperation/query";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const RoleList = () => {
  const jwt = localStorage.getItem("jwtToken");
  let navigate = useNavigate();

  const {
    loading,
    error,
    data: roleList,
  } = useQuery(GET_ALL_USER_ROLE, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
  });

  if (loading) return <Loading />;
  return (
    <>
      {roleList &&
        roleList.userRoles.data.map((userRoles) => (
          <CustomAccordion
            key={userRoles.id}
            title={userRoles.attributes.description}
          >
            {/* <CustomUserList id="user-roles" users={userRoles.attributes.users.data} /> */}
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {userRoles.attributes.users &&
                userRoles.attributes.users.data.map((user) => (
                  <ListItem
                    key={user.id}
                    secondaryAction={
                      <IconButton
                        aria-label="edit"
                        onClick={() =>
                          navigate("/definition/employeer/edit/" + user.id)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={user.attributes.name} />
                  </ListItem>
                ))}
            </List>
          </CustomAccordion>
        ))}
    </>
  );
};

export default RoleList;
