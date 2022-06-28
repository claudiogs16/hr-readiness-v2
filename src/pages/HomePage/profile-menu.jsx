import { Button, Stack } from "@mui/material";

const ProfileMenu = () => {
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
      <Button variant="text" size="small">Alterar Senha</Button>
    </Stack>
  );
};

export default ProfileMenu;
