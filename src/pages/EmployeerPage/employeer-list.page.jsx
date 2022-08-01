import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { useRef, useState } from "react";
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
  const [search, setSearch] = useState("")
 
  const { loading, error, data: employeerList } = useQuery(GET_ALL_USERS, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only"
  });

  const handleChangeSearch = e => {
    setSearch(e.target.value)
  }

  


  if (loading) return <Loading />;


  return (
    <>
      <MenuCard
        itemLeft={<InputSearch handleChangeSearch={handleChangeSearch} search={search} />}
        itemRight={<AddButton onClick={() => navigate("new")} />}
      />
      <Grid container>
        <Grid item xs={12}>
          {employeerList && <CustomUserList search={search} id="employeer" users={employeerList.usersPermissionsUsers.data} />}
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeerList;
