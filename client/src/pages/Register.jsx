import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
export const Register = () => {

    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });

    const handleinput = (e)=>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        });
    };

    const navigate = useNavigate();

    const { storeTokenInLS } = useAuth();
    //handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(
                "http://localhost:5000/register", {
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
            });

            if(response.ok){
                const responseData = await response.json();
                alert("Registration Successful");
                console.log('res from server', responseData);
                storeTokenInLS(responseData.token);
                setUser({
                    username:"",
                    email:"",
                    phone:"",
                    password:"",
                });
                console.log(response);
                navigate("/login");
            }
        } catch (error) {
            console.log("Error found in Register", error);
        }
    };

    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/register.png" alt="registration image" width="500" height={500}/>
                        </div>

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        placeholder="username" 
                                        id="username" 
                                        required 
                                        autoComplete="off" 
                                        value={user.username}
                                        onChange={handleinput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                        type="emai" 
                                        name="email" 
                                        placeholder="email" 
                                        id="email" 
                                        required 
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleinput} 
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone">phone</label>
                                    <input 
                                        type="number" 
                                        name="phone" 
                                        placeholder="phone" 
                                        id="phone" 
                                        required 
                                        autoComplete="off" 
                                        value={user.phone}
                                        onChange={handleinput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="password" 
                                        id="password" 
                                        required 
                                        autoComplete="off" 
                                        value={user.password}
                                        onChange={handleinput}
                                    />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-submit">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
};