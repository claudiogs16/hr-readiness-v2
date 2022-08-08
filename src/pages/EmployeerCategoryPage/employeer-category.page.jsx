import { Grid } from "@mui/material";
import CategoryForm from "./category-form.component";
import CategoryList from "./category-list.component";

const EmployeerCategoryPage = () => {
  return (
    <Grid container spacing={1} maxWidth="lg" style={{ margin: "0 auto" }}>
      <Grid item xs={12} md={5}>
        <CategoryList />
      </Grid>
      <Grid item xs={2} ></Grid>
      <Grid item xs={12} md={5}>
        <CategoryForm />
      </Grid>
    </Grid>
  );
};

export default EmployeerCategoryPage;
