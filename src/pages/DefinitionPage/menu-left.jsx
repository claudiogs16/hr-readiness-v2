import { Grid } from "@mui/material";
import MenuItem from "./menu-item";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PushPinIcon from '@mui/icons-material/PushPin';

const MenuLeft = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<StarHalfIcon fontSize="large" />}
            title="Avaliações"
            url='employeer'
            bgcolor='#FAE8E8'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem icon={<AccountTreeIcon fontSize="large" />} title="Dimensões" url='post-role' bgcolor="#EDF4E9" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem icon={<PushPinIcon fontSize="large" />} title="Indicadores" url='dimension' bgcolor="#EDF4E9" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<QuestionAnswerIcon fontSize="large" />}
            title="Questões"
            url='role'
            bgcolor="#EDF4E9"
          />
        </Grid>
        
      </Grid>
    </>
  );
};

export default MenuLeft;
