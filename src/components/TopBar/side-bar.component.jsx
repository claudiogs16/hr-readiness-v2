import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockResetIcon from "@mui/icons-material/LockReset";
import ConstructionIcon from "@mui/icons-material/Construction";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PushPinIcon from '@mui/icons-material/PushPin';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import QuizIcon from '@mui/icons-material/Quiz';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
                navigate("/profile");
              }}
            >
              <Tooltip placement="left-start" title="Meu Perfil">
                <PersonIcon />
              </Tooltip>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("/employeer");
              }}
            >
              <Tooltip placement="left-start" title="Funcionários">
                <PeopleAltIcon />
              </Tooltip>
            </ListItem>

            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("/employeer/post-role");
              }}
            >
              <Tooltip placement="left-start" title="Gerenciar Cargos">
                <GroupWorkIcon />
              </Tooltip>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("/period");
              }}
            >
              <Tooltip placement="left-start" title="Gerenciar Periodos">
                <CalendarMonthIcon />
              </Tooltip>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("/dimension");
              }}
            >
              <Tooltip placement="left-start" title="Gerenciar Dimensões">
                <AccountTreeIcon />
              </Tooltip>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("/indicator");
              }}
            >
              <Tooltip placement="left-start" title="Gerenciar Indicadores">
                <PushPinIcon />
              </Tooltip>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("/question");
              }}
            >
              <Tooltip placement="left-start" title="Gerenciar Questoes">
                <QuizIcon />
              </Tooltip>
            </ListItem>

            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("password/reset");
              }}
            >
              <Tooltip placement="left-start" title="Repor Senha">
                <LockResetIcon />
              </Tooltip>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("password/change");
              }}
            >
              <Tooltip placement="left-start" title="Alterar Senha">
                <VpnKeyIcon />
              </Tooltip>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
                navigate("system");
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
