import { useLazyQuery } from "@apollo/client";
import { Grid, TextField } from "@mui/material";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import { GET_EMPLOYEER_DATA } from "./query.gql";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = () => {
  const jwt = localStorage.getItem("jwtToken");
  const { id: employeerID } = jwtDecode(jwt);
  const [loading, setLoading] = useState(true)
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    contact: '',
    startData: '',
    postRole: '',
    userRole: ''
  })

  const [getEmployeerData] = useLazyQuery(GET_EMPLOYEER_DATA)

  useEffect(()=>{
    getEmployeerData({
      variables: {
          "usersPermissionsUserId": employeerID
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then(data=>{
      
      let employeerData = data.data.usersPermissionsUser.data.attributes;
      setProfileData(pd=>{
        return {
          ...pd,
          name: employeerData.name,
          email: employeerData.email,
          contact: employeerData.contact,
          startData: employeerData.start_date,
          postRole: employeerData.postRole.data.attributes.postRole,
          userRole: employeerData.userRole.data.attributes.description
        }
      })
      setLoading(false)
    }).catch(e=>{
      setLoading(false)
      toast.error("Ocorreu um erro ao carregar os dados!!");
    })
  },[])

  if(loading) return <h1>Carregando...</h1>

  return (
    <MainContainer maxWidth="sm">
      <MainCard title="Meu Perfil">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="name"
              disabled
              label="Nome Completo"
              defaultValue={profileData.name}
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
              defaultValue={profileData.email}
              fullWidth
              type="email"
              name="email"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="contact"
              disabled
              label="Contacto"
              defaultValue={profileData.contact}
              fullWidth
              type="number"
              name="contact"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="start_date"
              disabled
              label="Data de Inicio"
              defaultValue={profileData.startData}
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
              defaultValue={profileData.postRole}
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
              defaultValue={profileData.userRole}
              fullWidth
              type="text"
              name="role"
            />
          </Grid>
        </Grid>
        <ToastContainer />
      </MainCard>
    </MainContainer>
  );
};

export default ProfilePage;
