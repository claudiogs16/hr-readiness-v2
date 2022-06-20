import { Container } from "@mui/system";
import MainCard from "../../components/MainCard/main-card.component";
import TitlePage from "../../components/TitlePage/title-page.components";
import MainTemplate from "../../templates/MainTemplate/main.template";
import Menu from "./menu";

const DefinitionPage = () => {
  return (
    <MainTemplate>
      <Container maxWidth="sm">
        <TitlePage title="Definições" />
        <MainCard content={<Menu />} />
      </Container>
    </MainTemplate>
  );
};

export default DefinitionPage;
