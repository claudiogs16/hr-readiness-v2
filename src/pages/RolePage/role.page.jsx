import { Outlet } from "react-router-dom";
import BackButton from "../../components/Button/back-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";

const RolePage = () => {
  return (
    <MainContainer title="Permissão" maxWidth="sm">
      <MainCard title={<BackButton />}>
        <Outlet />
      </MainCard>
    </MainContainer>
  );
};

export default RolePage;
