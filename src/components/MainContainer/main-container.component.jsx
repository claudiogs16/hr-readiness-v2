import { Container } from "@mui/material";

const MainContainer = ({ maxWidth, title, children }) => {
  return (
    <Container sx={{ margin: "o auto" }} maxWidth={maxWidth}>
      {children}
    </Container>
  );
};

export default MainContainer;
