import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useEffect } from "react";
const URL = "http://localhost:5000/login";
export const Login = () => {


    const navigate = useNavigate();

    const {storeTokenInLS} = useAuth();
    const [user, loginUser] = useState({
        email:"",
        password:"",
    });

    const handleinput = (e)=>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        loginUser({
            ...user,
            [name]:value,
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(user),
            });

            if(response.ok){
                const responseData = await response.json();
                console.log(responseData);
                storeTokenInLS(responseData.token);
                loginUser({
                    email:"",
                    password:"",
                });
                alert("Welcome ");
                console.log(response);

                //to change to logged in state
                navigate('/');
                
                useEffect( () => {
                    storeTokenInLS();
                }, [storeTokenInLS]);

            }
            else{
                alert("Invalid Credentials");
            }
        } catch (error) {
            console.error("login error : ", error);
        }

    }
    return <>

        <section>
            <main>
                <div className="section-login">
                    <div className="container grid grid-two-cols">
                        <div className="login-image">
                            <img src="/images/login.png" alt="login image" width={500} height={500}/>                        
                        </div>

                        <div className="Login-form">
                            <h1 className="main-heading mb-3">Login form</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        id="email"
                                        required
                                        value={user.email}
                                        onChange={handleinput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        id="password"
                                        required
                                        value={user.password}
                                        onChange={handleinput}
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Login
                                </button>
                            </form>
                        </div>                   
                    </div>
                </div>
                
            </main>
        </section>

    </>
};