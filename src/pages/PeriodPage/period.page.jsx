import { Grid } from "@mui/material";
import PeriodList from "./period-list.component";

const PeriodPage = () => {
    return (
        <Grid container maxWidth="sm" style={{ margin: "0 auto" }}>
            <Grid item xs={12}>
                <PeriodList />
            </Grid>
        </Grid>
    );
}

export default PeriodPage;