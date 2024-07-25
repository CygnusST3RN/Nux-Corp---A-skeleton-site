//We will use the NavLink to stop the links from relaoading when clicked on
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navbar.css";
export const Navbar = () => {
    const {isLoggedIn} = useAuth();
    return <>

        <div className="container">
            <div className="logo">
                <NavLink to="/"><i>Nux Corporation</i></NavLink>
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    {isLoggedIn ? (
                        <li><NavLink to="/logout">Logout</NavLink></li>
                    ) : (
                     <>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                     </>
                    )}

                </ul>
            </nav>
        </div>
    </>
}