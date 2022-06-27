import { Grid } from "@mui/material";
import MenuItem from "./menu-item";
import GroupIcon from "@mui/icons-material/Group";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ConstructionIcon from "@mui/icons-material/Construction";
import PasswordIcon from "@mui/icons-material/Password";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Menu = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<GroupIcon fontSize="large" />}
            title="Funcionários"
            url='employeer'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem icon={<GroupWorkIcon fontSize="large" />} title="Cargo" url='post-role' />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem icon={<AccountTreeIcon fontSize="large" />} title="Dimensão" url='dimension' />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<VisibilityIcon fontSize="large" />}
            title="Permissão"
            url='role'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<ConstructionIcon fontSize="large" />}
            title="Sistema"
            url='/definition/system'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<PasswordIcon fontSize="large" />}
            title="Repor Senhas"
            url='/definition/password-reset'
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Menu;
