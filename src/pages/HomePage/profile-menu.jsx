import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  let navigate = useNavigate();
  return (
    <Stack direction='row' spacing={2}>
      <Button
        color="warning"
        variant="contained"
        size="small"
        style={{ borderRadius: "15px" }}
      >
        Perfil
      </Button>
      <Button onClick={() => navigate("/password-change")} variant="text" size="small">Alterar Senha</Button>
    </Stack>
  );
};

export default ProfileMenu;
