import * as React from "react";
import EmployeerListItem from "./employeer-list-item";
import { Grid } from "@mui/material";
import MenuCard from "../../../components/MainCard/menu-card.component";
import InputSearch from "../../../components/TextField/input-search.component";
import EmployeerListMenu from "./employeer-list-menu";

const EmployeerList = () => {
  return (
    <>
      <MenuCard itemLeft={<InputSearch />} itemRight={<EmployeerListMenu />} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <EmployeerListItem name='Vitor Andrade' initials='CEO' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <EmployeerListItem name='Claudio Gomes' initials='DEV' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <EmployeerListItem name='Gabriela Vieira' initials='DG' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <EmployeerListItem name='Antónia de Pina' initials='DC' />
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeerList;
