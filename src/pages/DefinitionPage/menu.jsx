import { Grid } from "@mui/material";
import MenuItem from "./menu-item";
import GroupIcon from "@mui/icons-material/Group";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ConstructionIcon from "@mui/icons-material/Construction";
import PasswordIcon from "@mui/icons-material/Password";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import EmployeerForm from "./EmployeerPage/employeer-form.page";

const Menu = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<GroupIcon fontSize="large" />}
            title="Funcionários"
            modalContent={<EmployeerForm />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem icon={<GroupWorkIcon fontSize="large" />} title="Cargo" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<VisibilityIcon fontSize="large" />}
            title="Permissão"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<ConstructionIcon fontSize="large" />}
            title="Sistema"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<PasswordIcon fontSize="large" />}
            title="Repor Senhas"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Menu;
