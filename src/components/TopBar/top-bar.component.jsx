import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./side-bar";

const TopBar = () => {
  let navigate = useNavigate();
    return (<>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <SideBar />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                HRReadiness
              </Typography>
              <Button onClick={() => navigate('/login')} color="inherit">Terminar Sessão</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Outlet />
      </>);
}
 
export default TopBar;