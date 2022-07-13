import { Container } from "@mui/material";
import { useState } from "react";
import MainCard from "../../components/MainCard/main-card.component";
import EmailForm from "./email-form";
import SignInForm from "./sign-in-form";

const LoginPage = () => {
  const [form, setForm] = useState("EMAIL");

  return (
    <Container maxWidth="xs" sx={{ marginTop: { xs: "70px", md: "50px" } }}>
      <MainCard>
        {(() => {
          switch (form) {
            case "EMAIL":
              return <EmailForm setForm={setForm} />;
            case "PASSWORD":
              return <SignInForm setForm={setForm} />;
            default:
              return <EmailForm setForm={setForm} />;
          }
        })()}
      </MainCard>
    </Container>
  );
};

export default LoginPage;
