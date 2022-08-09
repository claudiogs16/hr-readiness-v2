import { useLazyQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { PostRoleContext } from "../../contexts/postRole-context";
import PostRoleList from "./post-role-list.component";
import { GET_POST_ROLE } from "./query.gql";

const PostRolePage = () => {
  const jwt = localStorage.getItem("jwtToken");
  const { postRoles, setPostRoles } = useContext(PostRoleContext);

  const [getPostRole] = useLazyQuery(GET_POST_ROLE);

  useEffect(() => {
    setPostRoles([]);
    getPostRole({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then((data) => {
      data.data.postRoles.data.map((postRole) => {
        setPostRoles((pr) => [...pr, postRole]);
      });
    });
  }, []);

  return (
    <Grid container maxWidth="sm" style={{ margin: "0 auto" }}>
      <Grid item xs={12} md={12}>
        <PostRoleList postRoles={postRoles} setPostRoles={setPostRoles} />
      </Grid>
    </Grid>
  );
};

export default PostRolePage;
