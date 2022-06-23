import { useNavigate } from "react-router-dom";
import ButtonAdd from "../../components/Button/button-add.component";

const PostRoleListMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <ButtonAdd onClick={() => navigate("/definition/post-role/new")} />
    </>
  );
};

export default PostRoleListMenu;
