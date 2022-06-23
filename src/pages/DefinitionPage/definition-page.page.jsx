import MainCard from "../../components/MainCard/main-card.component";
import MainTemplate from "../../templates/MainTemplate/main.template";
import Menu from "./menu";

const DefinitionPage = () => {
  return (
    <MainTemplate title="Definições" maxWidth="sm">
      <MainCard content={<Menu />} />
    </MainTemplate>
  );
};

export default DefinitionPage;
