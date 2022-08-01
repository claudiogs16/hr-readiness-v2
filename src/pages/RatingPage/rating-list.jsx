import { useQuery } from "@apollo/client";
import { Grid, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/Button/add-buttom.component";
import CustomList from "../../components/List/custom-list.component";
import Loading from "../../components/Loading/loading.component";
import MenuCard from "../../components/MenuCard/menu-card.component";
import InputSearch from "../../components/TextField/input-search.component";
import { GET_ALL_PERIOD } from "../../gqloperation/query";
import EditIcon from "@mui/icons-material/Edit";

const RatingList = () => {
  let navigate = useNavigate();
  const jwt = localStorage.getItem("jwtToken");
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const { loading, error, data } = useQuery(GET_ALL_PERIOD, {
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
      <MenuCard
        itemLeft={
          <InputSearch
            search={search}
            handleChangeSearch={handleChangeSearch}
          />
        }
        itemRight={<AddButton onClick={() => navigate("new")} />}
      />
      <Grid container>
        <Grid item xs={12}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {data &&
              data.periods.data
                .filter((name) => {
                  return (
                    name.attributes.description
                      .toLowerCase()
                      .indexOf(search.toLowerCase()) >= 0
                  );
                })
                .map((periods) => (
                  <ListItem
                    key={periods.id}
                    secondaryAction={
                      <IconButton
                        aria-label="edit"
                        onClick={() => navigate("edit/" + periods.id)}
                      >
                        <EditIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={periods.attributes.description}
                      secondary={
                        periods.attributes.employeer.data.attributes.name
                      }
                    />
                  </ListItem>
                ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default RatingList;
