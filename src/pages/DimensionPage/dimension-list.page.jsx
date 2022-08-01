import AddButton from "../../components/Button/add-buttom.component";
import MenuCard from "../../components/MenuCard/menu-card.component";
import InputSearch from "../../components/TextField/input-search.component";
import { useNavigate } from "react-router-dom";
import { Grid, IconButton, List, ListItem, ListItemText } from "@mui/material";
import CustomList from "../../components/List/custom-list.component";
import { useQuery } from "@apollo/client";
import { GET_ALL_DIMENSIOS } from "../../gqloperation/query";
import Loading from "../../components/Loading/loading.component";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const DimensionList = () => {
  let navigate = useNavigate();
  const jwt = localStorage.getItem("jwtToken");
  const [search, setSearch] = useState("");

  const handleChangeSearch = e => {
    setSearch(e.target.value);
  }

  const {
    loading: loadingGetAllDimension,
    error: errorGetAllDimension,
    data: dataGetAllDimension,
  } = useQuery(GET_ALL_DIMENSIOS, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
  });

  if (loadingGetAllDimension) return <Loading />;

 

  return (
    <>
      <MenuCard
        itemLeft={<InputSearch search={search} handleChangeSearch={handleChangeSearch} />}
        itemRight={<AddButton onClick={() => navigate("new")} />}
      />
      <Grid container>
        <Grid item xs={12}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {dataGetAllDimension &&
              dataGetAllDimension.dimensions.data.filter(name=>{return name.attributes.dimension.toLowerCase().indexOf(search.toLowerCase()) >= 0 }).map((dimension) => (
                <ListItem
                  key={dimension.id}
                  secondaryAction={
                    <IconButton
                      aria-label="edit"
                      onClick={() => navigate("edit/" + dimension.id)}
                    >
                      <EditIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={dimension.attributes.dimension} />
                </ListItem>
              ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default DimensionList;
