import { Grid } from "@mui/material";
import ItemCard from "../../components/MainCard/item-card.component";




const AnalyticsItem = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <ItemCard title='Avaliações' value='120' />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemCard title='Efectuado' value='100' />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ItemCard title='Pendente' value='20' />
            </Grid>
        </Grid>
    );
}
 
export default AnalyticsItem;