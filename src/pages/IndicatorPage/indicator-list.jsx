import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import AddButton from "../../components/Button/add-buttom.component";
import MenuCard from "../../components/MenuCard/menu-card.component";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../../components/Select/custom-select.component";
import CustomList from "../../components/List/custom-list.component";
import InputSearch from "../../components/TextField/input-search.component";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  GET_ALL_DIMENSIONS_FILTER,
  GET_ALL_DIMENSIOS,
  GET_ALL_INDICATOR,
  GET_INDICATOR_BY_ID,
} from "../../gqloperation/query";
import { useEffect, useRef, useState } from "react";
import id from "date-fns/esm/locale/id/index.js";
import { ClassNames } from "@emotion/react";
import EditIcon from "@mui/icons-material/Edit";
import Loading from "../../components/Loading/loading.component";

const IndicatorList = () => {
  let navigate = useNavigate();
  const jwt = localStorage.getItem("jwtToken");
  const [search, setSearch] = useState("")

  const { loading, error, data } = useQuery(GET_ALL_INDICATOR, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
  });

  const handleChangeSearch = e => {
    setSearch(e.target.value)
  }

  if (loading) return <Loading />;

  

  return (
    <>
      <MenuCard
        itemLeft={<InputSearch search={search} handleChangeSearch={handleChangeSearch} />}
        itemRight={<AddButton onClick={() => navigate("new")} />}
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {data &&
              data.indicators.data.filter(name=>{return name.attributes.indicator.toLowerCase().indexOf(search.toLowerCase()) >= 0 }).map((indicator) => (
                <ListItem
                  key={indicator.id}
                  secondaryAction={
                    <IconButton
                      aria-label="edit"
                      onClick={() =>
                        navigate("edit/" + indicator.id)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={indicator.attributes.indicator}
                    secondary={
                      indicator.attributes.dimension.data.attributes.dimension
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

export default IndicatorList;
