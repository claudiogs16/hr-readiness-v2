import { Outlet } from "react-router-dom";
import ButtonBack from "../../components/Button/button-back.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainTemplate from "../../templates/MainTemplate/main.template";

const SystemPage = () => {
  return (
    <MainTemplate title="Sistema" maxWidth="sm">
      <MainCard content={<Outlet />} title={<ButtonBack color="info" />} />
    </MainTemplate>
  );
};

export default SystemPage;
