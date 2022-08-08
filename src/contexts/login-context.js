import { createContext, useState } from "react";

export const LoginContext = createContext();

const inicialState = {
    id: '',
    email: '',
    isResetPassword: false
}

export function LoginContextProvider({children}){

    const [loginData, setLoginData] = useState(inicialState);

    return <LoginContext.Provider value={{loginData, setLoginData}}>{children}</LoginContext.Provider>
}