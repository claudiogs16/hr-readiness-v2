import { useLazyQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import PostRoleForm from "./post-role-form.component";
import PostRoleList from "./post-role-list.component";
import { GET_POST_ROLE } from "./query.gql";

const PostRolePage = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [postRoles, setPostRoles] = useState([]);
  const [postRoleEdit, setPostRoleEdit] = useState({
    id: '',
    postRole: '',
    description: ''
  })

  const [getPostRole] = useLazyQuery(GET_POST_ROLE);

  useEffect(()=>{
    getPostRole({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then(data=>{
      console.log(data.data.postRoles.data)
      data.data.postRoles.data.map(postRole => {
        setPostRoles(pr => [...pr, postRole])
      })
    })
  },[])

  return (
    <Grid container spacing={1} maxWidth="lg" style={{ margin: "0 auto" }}>
      <Grid item xs={12} md={5}>
        <PostRoleList postRoles={postRoles} setPostRoles={setPostRoles} postRoleEdit={postRoleEdit} setPostRoleEdit={setPostRoleEdit} />
      </Grid>
      <Grid item xs={2} ></Grid>
      <Grid item xs={12} md={5}>
        <PostRoleForm setPostRoles={setPostRoles} setPostRoleEdit={setPostRoleEdit} postRoleEdit={postRoleEdit} />
      </Grid>
    </Grid>
  );
};

export default PostRolePage;
