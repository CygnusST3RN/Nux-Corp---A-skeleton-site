import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useEffect } from "react";

export const Logout = () => {
    const {logoutUser} = useAuth();

    useEffect( () => {
        logoutUser();
    }, [logoutUser]);

    return <Navigate to="/login"/>
};