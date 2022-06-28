import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConstructionIcon from "@mui/icons-material/Construction";
import {
  Box,
  Divider,
  List,
  ListItem,
  SwipeableDrawer,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        sx={{ mr: 2 }}
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div style={{ width: "60px" }}>
          <Box textAlign="center" p={2}>
            <MenuIcon />
          </Box>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("/");
              }}
            >
              <Tooltip placement="left-start" title="Pagina Inicial">
                <HomeIcon />
              </Tooltip>
            </ListItem>

            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("dashboard");
              }}
            >
              <Tooltip placement="left-start" title="Dashboard">
                <DashboardIcon />
              </Tooltip>
            </ListItem>

            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("definition");
              }}
            >
              <Tooltip placement="left-start" title="Definições">
                <ConstructionIcon />
              </Tooltip>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default SideBar;
