import { Grid } from "@mui/material";
import EmployeerForm from "./employeer-form.component";
import EmployeerList from "./employeer-list.component";

const EmployeerPage = () => {
  return (
    <Grid container spacing={5} maxWidth="lg" style={{ margin: "0 auto" }}>
      <Grid item xs={12} md={7}>
        <EmployeerList />
      </Grid>
      <Grid item xs={12} md={5}>
        <EmployeerForm />
      </Grid>
    </Grid>
  );
};

export default EmployeerPage;
