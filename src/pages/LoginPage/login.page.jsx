import { Container } from "@mui/material";
import { useState } from "react";
import MainCard from "../../components/MainCard/main-card.component";
import EmailForm from "./email-form";
import NewPasswordForm from "./new-password-form";
import SignInForm from "./sign-in-form";

const LoginPage = () => {
  const [form, setForm] = useState("EMAIL");
  const [emailLogin, setEmailLogin] = useState("");

  return (
    <Container maxWidth="xs" sx={{ marginTop: { xs: "70px", md: "50px" } }}>
      <MainCard>
        {(() => {
          switch (form) {
            case "EMAIL":
              return (
                <EmailForm
                  setForm={setForm}
                  setEmailLogin={setEmailLogin}
                  emailLogin={emailLogin}
                />
              );
            case "PASSWORD":
              return <SignInForm email={emailLogin} />;
            case "NEW_PASSWORD":
              return <NewPasswordForm />;

            default:
              return <EmailForm />;
          }
        })()}
      </MainCard>
    </Container>
  );
};

export default LoginPage;
