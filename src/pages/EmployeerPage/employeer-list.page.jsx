import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/Button/add-buttom.component";
import CustomList from "../../components/List/custom-list.component";
import CustomUserList from "../../components/List/custom-user-list.component";
import Loading from "../../components/Loading/loading.component";
import MenuCard from "../../components/MenuCard/menu-card.component";
import InputSearch from "../../components/TextField/input-search.component";
import { GET_ALL_USERS } from "../../gqloperation/query";

const EmployeerList = () => {
  let navigate = useNavigate();
  const jwt = localStorage.getItem("jwtToken");

  const { loading, error, data } = useQuery(GET_ALL_USERS, {
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
      <MenuCard
        itemLeft={<InputSearch />}
        itemRight={<AddButton onClick={() => navigate("new")} />}
      />
      <Grid container>
        <Grid item xs={12}>
          {data && <CustomUserList users={data.usersPermissionsUsers.data} />}
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeerList;
