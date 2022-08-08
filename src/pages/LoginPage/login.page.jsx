import { Outlet } from "react-router-dom";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";

const LoginPage = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <MainContainer maxWidth="xs">
        <MainCard>
          <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
            <Outlet />
          </div>
        </MainCard>
      </MainContainer>
    </div>
  );
};

export default LoginPage;
