import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/Button/add-buttom.component";
import CustomList from "../../components/List/custom-list.component";
import MenuCard from "../../components/MenuCard/menu-card.component";
import InputSearch from "../../components/TextField/input-search.component";

const RatingList = () => {
  let navigate = useNavigate();
  return (
    <>
      <MenuCard
        itemLeft={<InputSearch />}
        itemRight={<AddButton onClick={() => navigate("new")} />}
      />
      <Grid container>
        <Grid item xs={12}>
          <CustomList />
        </Grid>
      </Grid>
    </>
  );
};

export default RatingList;
