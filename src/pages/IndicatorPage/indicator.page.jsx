import BackButton from "../../components/Button/back-button.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import { Outlet } from "react-router-dom";

const IndicatorPage = () => {
  return (
    <MainContainer title="Indicador" maxWidth="sm">
      <MainCard title={<BackButton />}>
        <Outlet />
      </MainCard>
    </MainContainer>
  );
};

export default IndicatorPage;
