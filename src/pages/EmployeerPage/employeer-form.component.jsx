import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_POST, GET_POSTS, GET_POST_ROLES, GET_USER_ROLES } from "./query.gql";
import { useEffect, useMemo, useRef, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CREATE_EMPLOYEER, UPDATE_EMPLOYEER } from "./mutation.gql";
import { RESET_PASSWORD } from "../../helpers";



const validationEmailForm = yup
  .object({
    name: yup
      .string()
      .min(6, "O nome precisa ter mais de 6 caracteres")
      .required("Nome Completo é obrigatorio"),
    email: yup
      .string()
      .email("Insira um email valido")
      .required("O email é obrigatório"),
    contact: yup
      .number()
      .typeError("Insira um contacto valido")
      .min(7, "O contacto precisa ter minimo 7 numero")
      .required("Contacto é obrigatório"),
      
  })
  .required();

const ActionForm = () => {
    
    return (
      <Tooltip title="Adicionar Novo" placement="right">
        <IconButton
         
          color="info"
          aria-label="Add"
          component="span"
        >
          <PersonAddIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    );
  };


const EmployeerForm = ({employeer, setEmployeer, setEmployeers, employeers}) => {
  const jwt = localStorage.getItem("jwtToken");
  const [postRoles, setPostRoles] = useState([]);
  const [userRoles, setUserRoles] = useState([])
  const btnName = useRef("Registrar")


  const handleChangePostRole = e => {
    setEmployeer(em => {
      return {
        ...em,
        postRole: e.target.value
      }
    })
  }

  const handleChangeUserRole = e => {
    setEmployeer(em => {
      return {
        ...em,
        userRole: e.target.value
      }
    })
  }

  const handleChangeStatus = e => {
    setEmployeer(em => {
      return {
        ...em,
        blocked: e.target.value
      }
    })
  }

  const handleChangeDate = e => {
    setEmployeer(em => {
      return {
        ...em,
        start_date: e.target.value
      }
    })
  }


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const [getPostRoles] = useLazyQuery(GET_POST_ROLES)
  const [getUserRoles] = useLazyQuery(GET_USER_ROLES)
  const [createEmployeer] = useMutation(CREATE_EMPLOYEER)
  const [updateEmployeer] = useMutation(UPDATE_EMPLOYEER)


  useEffect(()=>{
    getPostRoles({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then(data => {
      
      let postRolesData = data.data.postRoles.data;

      setPostRoles(postRolesData)
    });

    getUserRoles({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then(data=> {
      let userRolesData = data.data.userRoles.data;
      setUserRoles(userRolesData)
      
    })
  },[])


  const formEmployeer = formData => {

    if(employeer.start_date === ''){
      toast.warning("Adicionar data inicio funcao");
      return false;
    }
    if(employeer.postRole === ''){
      toast.warning("Adicionar cargo");
      return false;
    }
    if(employeer.userRole === ''){
      toast.warning("Adicionar permissao");
      return false;
    }
    if(employeer.blocked === ''){
      toast.warning("Adicionar estado");
      return false;
    }


    if(employeer.id === ''){
      createEmployeer({
        variables: {
          "data": {
            "email": formData.email,
            "blocked": employeer.blocked,
            "contact": formData.contact,
            "start_date": employeer.start_date,
            "name": formData.name,
            "postRole": employeer.postRole,
            "userRole": employeer.userRole,
            "password": RESET_PASSWORD,
            "username": formData.email,
            "confirmed": true,
          }
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      }).then(data => {
    
        let obj = employeers.filter(em=> em.id !== employeer.id)
        obj.push(data.data.createUsersPermissionsUser.data)
        setEmployeers(obj)
        setEmployeer({
        id: '',
        name: '',
        email: '',
        contact: '',
        start_date: '',
        postRole: '',
        userRole: '',
        status: ''
        })
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("contact").value = '';

        toast.success("Funcionario adicionado com sucesso!!")
      }).catch(e=> {
        toast.error("Ocorreu um erro ao registrar funcionario!!")
      })
    }else{
      updateEmployeer({
        variables: {
          "updateUsersPermissionsUserId": employeer.id,
          "data": {
          "email": formData.email,
          "blocked": employeer.blocked,
          "contact": formData.contact,
          "start_date": employeer.start_date,
          "name": formData.name,
          "postRole": employeer.postRole,
          "userRole": employeer.userRole
          }
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      }).then(data => {
       
        let obj = employeers.filter(em=> em.id !== employeer.id)
        obj.push(data.data.updateUsersPermissionsUser.data)
        setEmployeers(obj)
        toast.success("Funcionario actualizado com sucesso!!")
      }).catch(e=> {
        toast.error("Ocorreu um erro ao registrar funcionario!!")
      })
    }



  }

  useMemo(() => {
    if (employeer.id === "") btnName.current = "Registrar";
    else btnName.current = "Actualizar";
  },[employeer])

  return (
    
      <form onSubmit={handleSubmit(formEmployeer)} noValidate>
        <Grid container maxWidth="sm" spacing={3} style={{marginTop: '5px'}}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              label="Nome Completo"
              defaultValue={employeer.name}
              fullWidth
              type="text"
              name="name"
              id="name"
              {...register("name")}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              label="Email"
              defaultValue={employeer.email}
              fullWidth
              type="email"
              name="email"
              id="email"
              {...register("email")}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              label="Contacto"
              defaultValue={employeer.contact}
              fullWidth
              type="number"
              name="contact"
              id="contact"
              {...register("contact")}
            helperText={errors.contact?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              label="Data Inicio Função"
              fullWidth
              type="date"
              value={employeer.start_date}
              onChange={handleChangeDate}
              name="start_date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="select-post-role-input-label">Cargo</InputLabel>
              <Select
                labelId="select-post-role-label"
                id="select-post-role"
                defaultValue={employeer.postRole}
                value={employeer.postRole}
                onChange={handleChangePostRole}
                label="Cargo"
                name="postRole"
                
              >
                {
                  postRoles && postRoles.map(postRole => (
                    <MenuItem key={postRole.id} value={postRole.id}>
                    {postRole.attributes.postRole}
                  </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="select-role-input-label">Permissão</InputLabel>
              <Select
                labelId="select-role-label"
                id="select-role"
                defaultValue={employeer.userRole}
                value={employeer.userRole}
                onChange={handleChangeUserRole}
                label="Permissão"
                name="userRole"
                
              >
                {
                  userRoles && userRoles.map(userRole => (
                    <MenuItem key={userRole.id} value={userRole.id}>
                    {userRole.attributes.description}
                  </MenuItem>
                  ))
                }
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="select-status-input-label">estado</InputLabel>
              <Select
                labelId="select-status-label"
                id="select-status"
                defaultValue={employeer.blocked}
                value={employeer.blocked}
                onChange={handleChangeStatus}
                label="estado"
                name="blocked"
              >
                <MenuItem  value={true}>Inativo</MenuItem>
                <MenuItem  value={false}>Ativo</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" size="large" variant="contained" fullWidth>
              {btnName.current}
            </Button>
            <ToastContainer />
          </Grid>
        </Grid>
      </form>
   
  );
};

export default EmployeerForm;
