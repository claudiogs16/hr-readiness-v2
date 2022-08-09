import { Button, Grid, TextField } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@apollo/client";
import { CREATE_POST_ROLE, UPDATE_POST_ROLE } from "./mutation.gql";
import { useContext, useMemo, useRef } from "react";
import { PostRoleContext } from "../../contexts/postRole-context";

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

const PostRoleForm = () => {
  const jwt = localStorage.getItem("jwtToken");

  const btnName = useRef("Adicionar");
  const { postRoles, setPostRoles, postRole, setPostRole } =
    useContext(PostRoleContext);

  const [createPostRole] = useMutation(CREATE_POST_ROLE);
  const [updatePostRole] = useMutation(UPDATE_POST_ROLE);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEmailForm),
  });

  const formPostRole = (formData) => {
    if (postRole.id === "") {
      createPostRole({
        variables: {
          data: {
            postRole: formData.postRole,
            description: formData.description,
          },
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      })
        .then((data) => {
          setPostRoles((pr) => [...pr, data.data.createPostRole.data]);
          document.getElementById("postRole").value = "";
          document.getElementById("description").value = "";
          toast.success("Novo cargo adicionado com sucesso!!");
        })
        .catch((e) => {
          toast.error("Ocorreu um erro ao adicionar cargo!!");
        });
    } else {
      updatePostRole({
        variables: {
          updatePostRoleId: postRole.id,
          data: {
            postRole: formData.postRole,
            description: formData.description,
          },
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
      })
        .then((data) => {
          let obj = postRoles.filter((pr) => pr.id !== postRole.id);
          obj.push(data.data.updatePostRole.data);
          setPostRoles(obj);
          toast.success("Cargo actualizado com sucesso!!");
        })
        .catch((error) => {
          toast.error("Ocorreu um erro ao actualizar cargo!!");
        });
    }
  };

  useMemo(() => {
    if (postRole.id === "") btnName.current = "Adicionar";
    else btnName.current = "Actualizar";
  }, [postRole]);

  return (
    <form onSubmit={handleSubmit(formPostRole)} noValidate>
      <Grid container spacing={3} style={{ marginTop: "5px" }}>
        <Grid item xs={12} md={4}>
          <TextField
            id="postRole"
            autoFocus
            required
            label="Sigla"
            defaultValue={postRole.postRole}
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
            defaultValue={postRole.description}
            fullWidth
            type="text"
            name="description"
            {...register("description")}
            helperText={errors.description?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            id="btnSubmit"
            variant="contained"
            size="large"
            fullWidth
          >
            {btnName.current}
          </Button>
          <ToastContainer />
        </Grid>
      </Grid>
    </form>
  );
};

export default PostRoleForm;
