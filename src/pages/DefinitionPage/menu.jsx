import { Grid } from "@mui/material";
import MenuItem from "./menu-item";
import GroupIcon from "@mui/icons-material/Group";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ConstructionIcon from "@mui/icons-material/Construction";
import PasswordIcon from "@mui/icons-material/Password";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import { useState } from "react";
import Modal from "../../components/Modal/modal.component";
import EmployeerForm from "./EmployeerPage/employeer-form.page";
import RoleForm from "./EmployeerPage/role-form.page";

const Menu = () => {
  const [openEmployeer, setOpenEmployeer] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openRole, setOpenRole] = useState(false);
  const [openSystem, setOpenSystem] = useState(false);
  const [openPasswordReset, setOpenPasswordReset] = useState(false);

  const handleEmployeerClickOpen = () => {
    setOpenEmployeer(true);
  };

  const handleRoleClickOpen = () => {
    setOpenRole(true);
  };

  const handleEmployeerClose = () => {
    setOpenEmployeer(false);
  };
  const handleRoleClose = () => {
    setOpenRole(false);
  };

  return (
    <>
      <Modal
        open={openEmployeer}
        onClose={handleEmployeerClose}
        maxWidth="lg"
        fullScreen={false}
      >
        <EmployeerForm />
      </Modal>
      <Modal
        open={openRole}
        onClose={handleRoleClose}
        maxWidth="lg"
        fullScreen={false}
      >
        <RoleForm />
      </Modal>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<GroupIcon fontSize="large" />}
            title="Funcionários"
            handleClickOpen={handleEmployeerClickOpen}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem icon={<GroupWorkIcon fontSize="large" />} title="Cargo" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MenuItem
            icon={<VisibilityIcon fontSize="large" />}
            title="Permissão"
            handleClickOpen={handleRoleClickOpen}
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
