import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth-context";
import SideBar from "./side-bar.component";

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
      <Box
        sx={{
          backgroundColor: "transparent",
          marginLeft: { xs: "20px", md: "70px" },
          marginRight: { xs: "20px", md: "70px" },
          marginTop: {xs: "30px", md: "70px"},
          marginBottom: "20px"
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default TopBar;
