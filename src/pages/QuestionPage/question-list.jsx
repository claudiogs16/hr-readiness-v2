import { Grid, IconButton, List, ListItem, ListItemText } from "@mui/material";
import AddButton from "../../components/Button/add-buttom.component";
import MenuCard from "../../components/MenuCard/menu-card.component";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../../components/Select/custom-select.component";
import CustomList from "../../components/List/custom-list.component";
import InputSearch from "../../components/TextField/input-search.component";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUESTION } from "../../gqloperation/query";
import Loading from "../../components/Loading/loading.component";
import { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";

const QuestionList = () => {
  let navigate = useNavigate();
  const jwt = localStorage.getItem("jwtToken");
  const [search, setSearch] = useState("");

  const { loading, error, data } = useQuery(GET_ALL_QUESTION, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
  });

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  if (loading) return <Loading />;

  if (data) console.log(data.questions.data[0].attributes.question);

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {data &&
              data.questions.data
                .filter((name) => {
                  return (
                    name.attributes.question
                      .toLowerCase()
                      .indexOf(search.toLowerCase()) >= 0
                  );
                })
                .map((question) => (
                  <ListItem
                    key={question.id}
                    secondaryAction={
                      <IconButton
                        aria-label="edit"
                        onClick={() => navigate("edit/" + question.id)}
                      >
                        <EditIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={question.attributes.question}
                      secondary={
                        question.attributes.indicator.data.attributes.indicator
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

export default QuestionList;
