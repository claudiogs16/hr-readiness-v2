import { Grid, TextField } from "@mui/material";
import CustomButton from "../../components/Button/custom-button.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { CREATE_POST_ROLE, UPDATE_POST_ROLE } from "../../gqloperation/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { GET_GET_POST_ROLES_FILTERS } from "../../gqloperation/query";
import { useEffect, useState } from "react";

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

const PostRoleFormEdit = () => {
  const jwt = localStorage.getItem("jwtToken");
  const { postRoleID } = useParams();
 

  const msnSuccess = () => toast.success("Cargo foi actualizado com sucesso!!");
  const msnError = () => toast.error("Erro ao adicionar cargo!!");

  const [getPostRole] = useLazyQuery(GET_GET_POST_ROLES_FILTERS);

  const {loading: loadingGetPostRole, error: errorGetPostRole, data: dataGetPostRole} = useQuery(GET_GET_POST_ROLES_FILTERS, {
    variables: {
        filters: {
          id: {
            eq: postRoleID,
          },
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
  })

  const [updatePostRole] = useMutation(UPDATE_POST_ROLE)

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  

  const formPostRole = (dataForm) => {

    updatePostRole({
        variables: {
            updatePostRoleId: postRoleID,
            data: {
              postRole: dataForm.postRole,
              description: dataForm.description,
            },
          },
          context: {
            headers: {
              authorization: `Bearer ${jwt}`,
            },
          },
          fetchPolicy: "network-only", 
    }).then((d) => {
        msnSuccess();
    }).catch(e=>{
        msnError();
    })
  };

  if(loadingGetPostRole) return <h1>Carregando...</h1>

  return (
    <form onSubmit={handleSubmit(formPostRole)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            id="postRole"
            required
            label="Sigla"
            defaultValue={dataGetPostRole.postRoles.data[0].attributes.postRole}
            fullWidth
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            name="postRole"
            {...register("postRole")}
            helperText={errors.postRole?.message}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="description"
            required
            label="Cargo"
            defaultValue={dataGetPostRole.postRoles.data[0].attributes.description}
            fullWidth
            
            InputLabelProps={{
              shrink: true,
            }}
            type="text"
            name="description"
            {...register("description")}
            helperText={errors.description?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomButton type="submit" name="Actualizar" />
          <ToastContainer />
        </Grid>
      </Grid>
    </form>
  );
};

export default PostRoleFormEdit;
