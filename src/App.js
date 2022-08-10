import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/top-bar.component";
import HomePage from "./pages/HomePage/home.page";
import ProfilePage from "./pages/ProfilePage/profile.page";
import PasswordChangePage from "./pages/PasswordChangePage/password-change.page";
import SystemPage from "./pages/SystemPage/system.page";
import PasswordResetPage from "./pages/PasswordResetPage/password-reset.page";
import EmployeerPage from "./pages/EmployeerPage/employeer.page";
import LoginPage from "./pages/LoginPage/login.page";
import LoginEmail from "./pages/LoginPage/login-email.component";
import LoginPassword from "./pages/LoginPage/login-password.component";
import LoginCreatePassword from "./pages/LoginPage/login-create-password.component";
import DimensionPage from "./pages/DimensionPage/dimension.page";
import IndicatorPage from "./pages/IndicatorPage/indicator.page";
import QuestionPage from "./pages/QuestionPage/question.page";
import { LoginContextProvider } from "./contexts/login-context";
import { AuthProvider } from "./contexts/auth-context";
import PrivateRoute from "./routes/private.routes";
import PublicRoute from "./routes/public.routes";
import PostRolePage from "./pages/PostRolePage/post-role.page";
import { PostRoleProvider } from "./contexts/postRole-context";

document.title = 'HR-Readiness';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <LoginContextProvider>
          <PostRoleProvider>
            <CssBaseline />
            <Router>
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<TopBar />}>
                    <Route index element={<HomePage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="employeer" element={<EmployeerPage />} />
                    <Route
                      path="employeer/category"
                      element={<PostRolePage />}
                    />
                    <Route
                      path="password/change"
                      element={<PasswordChangePage />}
                    />
                    <Route
                      path="password/reset"
                      element={<PasswordResetPage />}
                    />
                    <Route path="system" element={<SystemPage />} />
                    <Route path="dimension" element={<DimensionPage />} />
                    <Route path="indicator" element={<IndicatorPage />} />
                    <Route path="question" element={<QuestionPage />} />
                  </Route>
                </Route>

                <Route element={<PublicRoute />}>
                  <Route path="/login" element={<LoginPage />}>
                    <Route index element={<LoginEmail />} />
                    <Route path="password" element={<LoginPassword />} />
                    <Route
                      path="password/create"
                      element={<LoginCreatePassword />}
                    />
                  </Route>
                </Route>
              </Routes>
            </Router>
          </PostRoleProvider>
        </LoginContextProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
