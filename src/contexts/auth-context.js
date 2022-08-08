import { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";

const inicialState =  {
    user: null
}

if (localStorage.getItem("jwtToken")) {
  const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
  if(decodedToken.exp * 1000 < Date.now()){
    localStorage.removeItem("jwtToken");
  } else {
    inicialState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispach] = useReducer(authReducer, inicialState);

  function login(userData) {
    localStorage.setItem("jwtToken", userData.jwt);
    dispach({
      type: "LOGIN",
      payload: userData,
    });
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    dispach({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
