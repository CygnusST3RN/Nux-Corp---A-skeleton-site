import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

        const [token, setToken] = useState(localStorage.getItem('token'));
        const [user, setUser] = useState("");
        const storeTokenInLS = (serverToken) => {
            setToken("token");
            return localStorage.setItem('token', serverToken);
        }
 
        let isLoggedIn = !!token;
        
        //logout functionality
        const logoutUser = () => {
            setToken("");
            return localStorage.removeItem('token');
        };


        //JWT Authentication - to show the logged in user data
        const userAuthentication = async () =>{
            try {
                const response = await fetch("http://localhost:5000/user"
                    , {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if(response.ok){
                    const data = await response.json();
                    setUser(data.userData);
                }
            } catch (error) {
                console.log("Error fetching user data");
        
            }
        }
        useEffect( () => {
            userAuthentication();
        }, []);

        return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user}}>
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
 