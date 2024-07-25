import { Children, useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

        const storeTokenInLS = (serverToken) => {
            return localStorage.setItem('token', serverToken);
        }
        return (
        <AuthContext.Provider value={{storeTokenInLS}}>
            {children}
        </AuthContext.Provider>
        );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        console.error("useAuth used outside the provider");
    }
    return authContextValue;
}