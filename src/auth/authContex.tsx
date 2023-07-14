import  { createContext, ReactNode, useReducer,useEffect } from "react";
import authReducer from "./reducer";
import { LOGIN, LOGOUT } from "../types/types";

type AuthState = {
  user: any
  login: () => void,
  logout: () => void
};




export const AuthContext = createContext<AuthState>({} as AuthState);

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const { children } = props;

  const init = () => {

    const user = localStorage.getItem("user")

    return user ? JSON.parse(user) : {name:"", login:false}
  }

  type StateInit = {
    name:string,
    login: boolean
  }

  const [state , dispatch] = useReducer(authReducer,{} as StateInit,init)


  useEffect(() => {

    if(state.login == false) return localStorage.removeItem("user")
    
    localStorage.setItem("user", JSON.stringify(state))
    
  }, [state])
  

  const login = () => {

    dispatch({
      type: LOGIN,
      payload:{name: "Jose"}
    })



  }

  const logout = () => {

    dispatch({
      type: LOGOUT,
    })


   } 

  return (
    <AuthContext.Provider value={{ user:state, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
