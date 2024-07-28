import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const About = () => {

    const [aboutName, setAboutName] = useState({
        name: "User",
        email: "You can register and login to see your info here",
    });

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setAboutName({
                name: user.username,
                email: user.email,
            });
        }
    }, [user]);

    return (<><h1>Hello This is the about page</h1>
        <p>Hello {aboutName.name}</p> </>
    )
};