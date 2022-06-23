import { Outlet } from "react-router-dom";
import ButtonBack from "../../components/Button/button-back.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainTemplate from "../../templates/MainTemplate/main.template";

const RolePage = () => {
  return (
    <MainTemplate title="Permissão" maxWidth="sm">
      <MainCard content={<Outlet />} title={<ButtonBack color="info" />} />
    </MainTemplate>
  );
};

export default RolePage;
