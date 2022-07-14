import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import SideBar from "./side-bar";

const TopBar = () => {
  const { logout } = useContext(AuthContext);


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <SideBar />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              HRReadiness
            </Typography>
            <Button onClick={logout} color="inherit">
              Terminar Sessão
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

export default TopBar;
