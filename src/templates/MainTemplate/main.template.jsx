import { Container } from "@mui/material";
import TitlePage from "../../components/TitlePage/title-page.components";

const MainTemplate = (props) => {
  return (
    <Container
      sx={{
        margin: "0 auto",
        maxWidth: { md: "1100px" },
      }}
    >
      {props.title && <TitlePage title={props.title} />}
      {props.children}
    </Container>
  );
};

export default MainTemplate;
