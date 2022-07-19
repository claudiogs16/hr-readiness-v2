import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Routes/private.routes";
import TopBar from "./components/TopBar/top-bar.component";

import { LoginContextProvider } from "./contexts/LoginContext";
import DefinitionPage from "./pages/DefinitionPage/definition.page";
import DimensionForm from "./pages/DimensionPage/dimension-form.page";
import DimensionList from "./pages/DimensionPage/dimension-list.page";
import DimensionPage from "./pages/DimensionPage/dimension.page";
import EmployeerForm from "./pages/EmployeerPage/employeer-form.page";
import EmployeerList from "./pages/EmployeerPage/employeer-list.page";
import EmployeerPage from "./pages/EmployeerPage/employeer.page";
import HomePage from "./pages/HomePage/home.page";
import IndicatorForm from "./pages/IndicatorPage/indicator-form";
import IndicatorList from "./pages/IndicatorPage/indicator-list";
import IndicatorPage from "./pages/IndicatorPage/indicator.page";
import LoginPage from "./pages/LoginPage/login.page";
import PasswordChangePage from "./pages/PasswordChangePage/password-change.page";
import PasswordCreatePage from "./pages/PasswordCreate/password-create.page";
import PasswordResetPage from "./pages/PasswordReset/password-reset.page";
import PostRoleForm from "./pages/PostRolePage/post-role-form.page";
import PostRoleList from "./pages/PostRolePage/post-role-list.page";
import PostRolePage from "./pages/PostRolePage/post-role.page";
import QuestionForm from "./pages/QuestionPage/question-form";
import QuestionList from "./pages/QuestionPage/question-list";
import QuestionPage from "./pages/QuestionPage/question.page";
import RoleList from "./pages/RolePage/role-list.page";
import RolePage from "./pages/RolePage/role.page";
import SystemPage from "./pages/SystemPage/system.page";
import theme from "./theme";
import { AuthProvider } from "./contexts/AuthContext";
import PublicRoute from "./Routes/public.routes";
function App() {
  return (
   
    <LoginContextProvider >
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<TopBar />}>
                  <Route index element={<HomePage />} />
                  <Route path="definition" element={<DefinitionPage />} />
                  <Route
                    path="definition/password-reset"
                    element={<PasswordResetPage />}
                  />
                  <Route path="definition/system" element={<SystemPage />} />
                  <Route
                    path="definition/employeer"
                    element={<EmployeerPage />}
                  >
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
                  <Route
                    path="definition/dimension"
                    element={<DimensionPage />}
                  >
                    <Route index element={<DimensionList />} />
                    <Route path="new" element={<DimensionForm />} />
                  </Route>
                  <Route
                    path="definition/indicator"
                    element={<IndicatorPage />}
                  >
                    <Route index element={<IndicatorList />} />
                    <Route path="new" element={<IndicatorForm />} />
                  </Route>
                  <Route path="definition/question" element={<QuestionPage />}>
                    <Route index element={<QuestionList />} />
                    <Route path="new" element={<QuestionForm />} />
                  </Route>
                  <Route
                    path="/password-change"
                    element={<PasswordChangePage />}
                  />
                </Route>
              </Route>
              <Route element={<PublicRoute />}>
                <Route
                  path="/password-create"
                  element={<PasswordCreatePage />}
                />
                <Route path="/login" element={<LoginPage />} />
              </Route>
              <Route path="*" element={<h1>Pagina de Erro!!</h1>} />
            </Routes>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </LoginContextProvider>
    
  );
}

export default App;
