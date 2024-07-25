import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

        const [token, setToken] = useState(localStorage.getItem('token'));

        const storeTokenInLS = (serverToken) => {
            setToken("token");
            return localStorage.setItem('token', serverToken);
        }
 
        let isLoggedIn = !!token;

        const logoutUser = () => {
            setToken("");
            return localStorage.removeItem('token');
        };

        return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser}}>
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
 