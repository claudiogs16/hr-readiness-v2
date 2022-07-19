import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import CustomAccordion from "../../components/Accordion/custom-accordion.component";
import AddButton from "../../components/Button/add-buttom.component";
import CustomUserList from "../../components/List/custom-user-list.component";
import Loading from "../../components/Loading/loading.component";
import MenuCard from "../../components/MenuCard/menu-card.component";
import { GET_ALL_POST_ROLE } from "../../gqloperation/query";

const PostRoleList = () => {
  let navigate = useNavigate();
  const jwt = localStorage.getItem("jwtToken");

  const { loading, error, data: postRoleList } = useQuery(GET_ALL_POST_ROLE, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only"
  });

  if (loading) return <Loading />;

  

  return (
    <>
      <MenuCard itemRight={<AddButton onClick={() => navigate("new")} />} />

      {postRoleList &&
        postRoleList.postRoles.data.map((postRoles) => (
          <CustomAccordion key={postRoles.id} title={postRoles.attributes.postRole}>
            <CustomUserList id="post-roles" users={postRoles.attributes.users.data} />
          </CustomAccordion>
        ))}
    </>
  );
};

export default PostRoleList;
