import { Grid } from "@mui/material";
import DimensionForm from "./dimension-form";
import DimensionList from "./dimension-list";

const DimensionPage = () => {
    return (
        <Grid container  maxWidth="sm" style={{ margin: "0 auto" }}>
      <Grid item xs={12} >
        <DimensionList />
      </Grid>
      
    </Grid>
    );
}
 
export default DimensionPage;