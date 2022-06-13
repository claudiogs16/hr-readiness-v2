import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import DefinitionPage from "./pages/DefinitionPage";

function App() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/password" element={<>Password</>} />
          <Route path="/profile" element={<>Profile</>} />
          <Route path="/definition" element={<DefinitionPage />} />
          <Route path="/login" element={<>Login</>} />
          <Route path="/employees" element={<>Employees</>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
