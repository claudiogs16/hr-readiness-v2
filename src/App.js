import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/top-bar.component";
import DefinitionPage from "./pages/DefinitionPage/definition.page";
import EmployeerForm from "./pages/EmployeerPage/employeer-form.page";
import EmployeerList from "./pages/EmployeerPage/employeer-list.page";
import EmployeerPage from "./pages/EmployeerPage/employeer.page";
import HomePage from "./pages/HomePage/home.page";
import PasswordResetPage from "./pages/PasswordReset/password-reset.page";
import PostRoleForm from "./pages/PostRolePage/post-role-form.page";
import PostRoleList from "./pages/PostRolePage/post-role-list.page";
import PostRolePage from "./pages/PostRolePage/post-role.page";
import RoleList from "./pages/RolePage/role-list.page";
import RolePage from "./pages/RolePage/role.page";
import SystemPage from "./pages/SystemPage/system.page";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<TopBar />}>
            <Route index element={<HomePage />} />
            <Route path="definition" element={<DefinitionPage />} />
            <Route
              path="definition/password-reset"
              element={<PasswordResetPage />}
            />
            <Route path="definition/system" element={<SystemPage />} />
            <Route path="definition/employeer" element={<EmployeerPage />}>
              <Route index element={<EmployeerList />} />
              <Route path="new" element={<EmployeerForm />} />
            </Route>
            <Route path="definition/role" element={<RolePage />}>
              <Route index element={<RoleList />} />
            </Route>
            <Route path="definition/post-role" element={<PostRolePage />}>
              <Route index element={<PostRoleList />} />
              <Route path="new" element={<PostRoleForm />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>Pagina de Erro!!</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
