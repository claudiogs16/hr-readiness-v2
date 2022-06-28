import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/dashboard-page.page";
import DefinitionPage from "./pages/DefinitionPage/definition-page.page";
import EmployeerList from "./pages/DefinitionPage/EmployeerPage/employeer-list";
import EmployeerNew from "./pages/DefinitionPage/EmployeerPage/employeer-new";
import EmployeerPage from "./pages/DefinitionPage/EmployeerPage/Employeer-page.page";
import DimensionList from "./pages/DimensionPage/dimension-list";
import DimensionPage from "./pages/DimensionPage/dimension-page.page";
import HomePage from "./pages/HomePage/home-page.page";
import NewPasswordPage from "./pages/NewPasswordPage/new-password-page.page";
import PasswordResetForm from "./pages/PasswordResetPage/password-reset-form";
import PasswordResetPage from "./pages/PasswordResetPage/password-reset-page.page";
import PostRoleForm from "./pages/PostRolePage/post-role-form";
import PostRoleList from "./pages/PostRolePage/post-role-list";
import PostRolePage from "./pages/PostRolePage/post-role-page.page";
import RoleList from "./pages/RolePage/role-list";
import RolePage from "./pages/RolePage/role-page.page";
import SystemForm from "./pages/SystemPage/system-form";
import SystemPage from "./pages/SystemPage/system-page.page";
import TopBar from "./templates/MainTemplate/top-bar";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<TopBar />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="definition" element={<DefinitionPage />} />
            <Route path="definition/employeer" element={<EmployeerPage />}>
              <Route index element={<EmployeerList />} />
              <Route path="new" element={<EmployeerNew />} />
            </Route>
            <Route path="/definition/role" element={<RolePage />}>
              <Route index element={<RoleList />} />
            </Route>
            <Route path="/definition/post-role" element={<PostRolePage />}>
              <Route index element={<PostRoleList />} />
              <Route path="new" element={<PostRoleForm />} />
            </Route>
            <Route path="/definition/dimension" element={<DimensionPage />}>
              <Route index element={<DimensionList />} />
            </Route>
            <Route path="/definition/password-reset" element={<PasswordResetPage />}>
              <Route index element={<PasswordResetForm />} />
            </Route>
            <Route path="/definition/system" element={<SystemPage />}>
              <Route index element={<SystemForm />} />
            </Route>
            <Route path="new-password" element={<NewPasswordPage />} />
          </Route>
          <Route path="*" element={<h1>Pagina de Erro!!</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
