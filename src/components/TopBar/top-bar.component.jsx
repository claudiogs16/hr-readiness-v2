import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./side-bar";

const TopBar = () => {
    return (<>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <SideBar />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                HRReadiness
              </Typography>
              <Button color="inherit">Terminar Sessão</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Outlet />
      </>);
}
 
export default TopBar;