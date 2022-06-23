import MainCard from "../../components/MainCard/main-card.component";
import TitlePage from "../../components/TitlePage/title-page.components";
import MainTemplate from "../../templates/MainTemplate/main.template";

const DashboardPage = () => {
  return (
    <MainTemplate>
      <TitlePage title="Dashboard" />
      <MainCard></MainCard>
    </MainTemplate>
  );
};

export default DashboardPage;
