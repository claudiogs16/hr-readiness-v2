import { Grid } from "@mui/material";
import AddButton from "../../components/Button/add-buttom.component";
import MenuCard from "../../components/MenuCard/menu-card.component";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../../components/Select/custom-select.component";
import CustomList from "../../components/List/custom-list.component";
import InputSearch from "../../components/TextField/input-search.component";

const IndicatorList = () => {
  let navigate = useNavigate();
  return (
    <>
      <MenuCard
      itemLeft={<InputSearch />}
        itemRight={<AddButton onClick={() => navigate("new")} />}
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <CustomSelect label="Dimensão" />
        </Grid>
        <Grid item xs={12}>
        <CustomList />
        </Grid>
      </Grid>
    </>
  );
};

export default IndicatorList;
