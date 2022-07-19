import { useQuery } from "@apollo/client";
import CustomAccordion from "../../components/Accordion/custom-accordion.component";
import CustomList from "../../components/List/custom-list.component";
import CustomUserList from "../../components/List/custom-user-list.component";
import Loading from "../../components/Loading/loading.component";
import { GET_ALL_USER_ROLE } from "../../gqloperation/query";

const RoleList = () => {
  const jwt = localStorage.getItem("jwtToken");

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
            <CustomUserList id="user-roles" users={userRoles.attributes.users.data} />
          </CustomAccordion>
        ))}
    </>
  );
};

export default RoleList;
