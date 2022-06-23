import { useNavigate } from "react-router-dom";
import ButtonAdd from "../../../components/Button/button-add.component";

const EmployeerListMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <ButtonAdd onClick={() => navigate("/definition/employeer/new")} />
    </>
  );
};

export default EmployeerListMenu;
