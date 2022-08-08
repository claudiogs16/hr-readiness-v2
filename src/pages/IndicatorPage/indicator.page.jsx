import { Grid } from '@mui/material';
import IndicatorList from './indicator-list.component';
import IndicatorForm from './indicator-form.component'

const IndicatorPage = () => {
    return (
        <Grid container spacing={5} maxWidth="lg" style={{ margin: "0 auto" }}>
      <Grid item xs={12} md={7}>
        <IndicatorList />
      </Grid>
      <Grid item xs={12} md={5}>
        <IndicatorForm />
      </Grid>
    </Grid>
    );
}
 
export default IndicatorPage;