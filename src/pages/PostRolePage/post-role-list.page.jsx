import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import CustomAccordion from "../../components/Accordion/custom-accordion.component";
import AddButton from "../../components/Button/add-buttom.component";
import CustomList from "../../components/List/custom-list.component";
import Loading from "../../components/Loading/loading.component";
import MenuCard from "../../components/MenuCard/menu-card.component";
import { GET_ALL_POST_ROLE } from "../../gqloperation/query";

const PostRoleList = () => {
  let navigate = useNavigate();
  const jwt = localStorage.getItem("jwtToken");

  const { loading, error, data } = useQuery(GET_ALL_POST_ROLE, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
  });

  if (loading) return <Loading />;

  data && console.log(data.postRoles.data[0].attributes.users.data);

  return (
    <>
      <MenuCard itemRight={<AddButton onClick={() => navigate("new")} />} />

      {data &&
        data.postRoles.data.map((pr) => (
          <CustomAccordion key={pr.id} title={pr.attributes.postRole}>
            <CustomList title={pr.attributes.users.data} />
          </CustomAccordion>
        ))}
    </>
  );
};

export default PostRoleList;
