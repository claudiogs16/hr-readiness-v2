import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DefinitionPage from "./pages/DefinitionPage/DefinitionPage";
import EmployeerPage from "./pages/EmployeerPage/EmployeerPage";
import HomePage from "./pages/HomePage/HomePage";
import PasswordChange from "./pages/PasswordChange/PasswordChange";
import PostPage from "./pages/PostPage/PostPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RatingPage from "./pages/RatingPage/RatingPage";
import RolePage from "./pages/RolePage/RolePage";
import SystemPage from "./pages/SystemPage/SystemPage";

function App() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/definition" element={<DefinitionPage />} />
          <Route path="/password" element={<PasswordChange />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/system" element={<SystemPage />} />
          <Route path="/employeer" element={<EmployeerPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/role" element={<RolePage />} />
          <Route path="/rating" element={<RatingPage />} />
          <Route path="/login" element={<>Login</>} />
          <Route path="/employees" element={<>Employees</>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
