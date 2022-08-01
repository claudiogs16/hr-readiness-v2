import CustomList from "../../components/List/custom-list.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";

const EvaluationPerfomedList = () => {
  return (
    <MainContainer title="Avaliacoes Efectuada" maxWidth="sm">
      <MainCard>
        <CustomList />
        <CustomList />
        <CustomList />
      </MainCard>
    </MainContainer>
  );
};

export default EvaluationPerfomedList;
