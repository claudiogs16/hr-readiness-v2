import { Grid } from "@mui/material";
import DimensionForm from "./dimension-form";
import DimensionList from "./dimension-list";

const DimensionPage = () => {
    return (
        <Grid container spacing={5} maxWidth="lg" style={{ margin: "0 auto" }}>
      <Grid item xs={12} md={7}>
        <DimensionList />
      </Grid>
      <Grid item xs={12} md={5}>
        <DimensionForm />
      </Grid>
    </Grid>
    );
}
 
export default DimensionPage;