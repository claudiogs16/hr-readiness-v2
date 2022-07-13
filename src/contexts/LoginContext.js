import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
    const [emailLogin, setEmailLogin] = useState("vitor@sintaxy.com");
  return <LoginContext.Provider value={{emailLogin, setEmailLogin}}>{children}</LoginContext.Provider>;
}
