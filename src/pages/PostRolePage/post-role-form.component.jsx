import { Button, Grid, IconButton, TextField, Tooltip } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@apollo/client";
import { CREATE_POST_ROLE } from "./mutation.gql";
import { useEffect, useMemo, useRef } from "react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ActionForm = ({setPostRoleEdit}) => {
    
    const handleClickAdd = () => {
        setPostRoleEdit({
          postRole: '',
          description: '',
          id: ''
        })
    }

    return (
      <Tooltip title="Adicionar Novo" placement="right">
        <IconButton
         
          color="info"
          aria-label="Add"
          component="span"
          onClick={handleClickAdd}
        >
          <AddCircleIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
    );
  };


const validationEmailForm = yup
  .object({
    postRole: yup
      .string()
      .min(2, "Sigla precisa ter mais de 2 caracteres")
      .required("O campo sigla é obrigatorio"),
    description: yup
      .string()
      .min(3, "Cargo precisa ter mais de 3 caracteres")
      .required("O campo cargo é obrigatório"),
  })
  .required();

const PostRoleForm = ({setPostRoles, postRoleEdit, setPostRoleEdit}) => {
  const jwt = localStorage.getItem("jwtToken");
  const [createPostRole] = useMutation(CREATE_POST_ROLE);
  const btnName = useRef("Adicionar")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const formPostRole = formData => {
    
      createPostRole({
        variables: {
          "data": {
            "postRole": formData.postRole,
            "description": formData.description,
          }
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      }).then(data => {
        setPostRoles(pr => [...pr, data.data.createPostRole.data])
        document.getElementById("postRole").value = "";
        document.getElementById("description").value = "";
        toast.success("Novo cargo adicionado com sucesso!!")
      }).catch(e=> {
        toast.error("Ocorreu um erro ao adicionar cargo!!")
      })


  }

  useMemo(()=>{
    if(postRoleEdit.id === '')
      btnName.current = 'Adicionar'
    else
      btnName.current = "Actualizar"
  },[postRoleEdit])

  


  return (
    <MainCard title="Cargo" headerAction={<ActionForm setPostRoleEdit={setPostRoleEdit} />}>
      <form onSubmit={handleSubmit(formPostRole)} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
          
            <TextField
            id="postRole"
              autoFocus
              required
              label="Sigla"
              
              value={postRoleEdit.postRole}
              fullWidth
              type="text"
              name="postRole"
              {...register("postRole")}
              helperText={errors.postRole?.message}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
            id="description"
              required
              label="Cargo"
              
              value={postRoleEdit.description}
              fullWidth
              type="text"
              name="description"
              {...register("description")}
              helperText={errors.description?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" id="btnSubmit" variant="contained" size="large" fullWidth>
              {btnName.current}
            </Button>
            <ToastContainer />
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default PostRoleForm;
