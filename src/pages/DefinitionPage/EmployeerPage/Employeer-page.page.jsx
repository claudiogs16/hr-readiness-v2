import MainCard from "../../../components/MainCard/main-card.component";
import MainTemplate from "../../../templates/MainTemplate/main.template";
import { Outlet } from "react-router-dom";
import ButtonBack from "../../../components/Button/button-back.component";

const EmployeerPage = () => {
  return (
    <MainTemplate title="Funcionários" maxWidth="sm">
      <MainCard content={<Outlet />} title={<ButtonBack color='info' />} />
    </MainTemplate>
  );
};

export default EmployeerPage;
