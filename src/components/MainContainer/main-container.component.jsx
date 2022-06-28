import { Container } from "@mui/material";
import TitlePage from "../TitlePage/titlePage.component";

const MainContainer = ({maxWidth, title, children}) => {
    return (
        <Container sx={{margin: 'o auto'}} maxWidth={maxWidth}>
            {title && <TitlePage title={title} />}
            {children}
        </Container>
    );
}
 
export default MainContainer;