import { Container } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EmailForm from "./email-form";
import SignInForm from "./sign-in-form";

const LoginPage = () => {
  return (
    <Container maxWidth="xs" sx={{ marginTop: { xs: "70px", md: "50px" } }}>
      <MainCard>{false ? <EmailForm /> : <SignInForm email="claudiogs16@gmail.com" />}</MainCard>
    </Container>
  );
};

export default LoginPage;
