import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConstructionIcon from "@mui/icons-material/Construction";
import CustomLink from "../../styled/custom-link.styled";
import { Box, Divider, List, ListItem, SwipeableDrawer } from "@mui/material";
import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(false);
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
            <CustomLink to="/">
              <ListItem button onClick={() => setOpen(false)}>
                <HomeIcon />
              </ListItem>
            </CustomLink>
            <CustomLink to="dashboard">
              <ListItem button onClick={() => setOpen(false)}>
                <DashboardIcon />
              </ListItem>
            </CustomLink>
            <CustomLink to="definition">
              <ListItem button onClick={() => setOpen(false)}>
                <ConstructionIcon />
              </ListItem>
            </CustomLink>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default SideBar;
