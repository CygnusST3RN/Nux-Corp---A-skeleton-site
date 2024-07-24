//We will use the NavLink to stop the links from relaoading when clicked on
import { NavLink } from "react-router-dom";

import "./Navbar.css";
export const Navbar = () => {
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
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>

                </ul>
            </nav>
        </div>
    </>
}