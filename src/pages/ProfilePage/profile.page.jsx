import { Grid, TextField } from "@mui/material";
import jwtDecode from "jwt-decode";
import BackButton from "../../components/Button/back-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import { GET_ALL_USER_DATA_BY_ID } from "../../gqloperation/query";
import { useMutation, useQuery } from "@apollo/client";
import Loading from "../../components/Loading/loading.component";

const ProfilePage = () => {
  const jwt = localStorage.getItem("jwtToken");
  const { id: userID } = jwtDecode(jwt);

  const { loading, data } = useQuery(GET_ALL_USER_DATA_BY_ID, {
    variables: {
      filters: {
        id: {
          eq: userID,
        },
      },
    },
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
  });

  if (loading) return <Loading />;


  return (
    <MainContainer title="Meu Perfil" maxWidth="sm">
      <MainCard title={<BackButton />}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="name"
              disabled
              label={data.usersPermissionsUsers.data[0].attributes.name}
              defaultValue=""
              fullWidth
              type="text"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              disabled
              label="Email"
              defaultValue={data.usersPermissionsUsers.data[0].attributes.email}
              fullWidth
              type="text"
              name="email"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="contact"
              disabled
              label="Contacto"
              defaultValue={
                data.usersPermissionsUsers.data[0].attributes.contact
              }
              fullWidth
              type="text"
              name="contact"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="start_date"
              disabled
              label="Data de Inicio"
              defaultValue={
                data.usersPermissionsUsers.data[0].attributes.start_date
              }
              fullWidth
              type="date"
              name="start_date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="postRole"
              disabled
              label="Cargo"
              defaultValue={
                data.usersPermissionsUsers.data[0].attributes.postRole.data
                  .attributes.postRole
              }
              fullWidth
              type="text"
              name="postRole"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="role"
              disabled
              label="Permissão"
              defaultValue={
                data.usersPermissionsUsers.data[0].attributes.userRole.data
                  .attributes.description
              }
              fullWidth
              type="text"
              name="role"
            />
          </Grid>
        </Grid>
      </MainCard>
    </MainContainer>
  );
};

export default ProfilePage;
