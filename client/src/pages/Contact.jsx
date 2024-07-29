import { useState } from "react";
import { useAuth } from "../store/auth";
import { useEffect } from "react";
export const Contact = () => {

  const setDefaultData = {
    username: "",
    email: "",
    message: "",
  }
  const [contact, setContact] = useState(setDefaultData);

  /* We can do this way also :-
  //to get the data from user creating one more state to use it in the form when user is logged in
  //assuming that we have the user data setting true initially
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if(user && userData){
    //check if the user and userData both present i.e. true
    //user is true if user have some data passed and stored in case of logged in
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }
  */
  //Or better to do this way
  const { user } = useAuth();

  useEffect(() => {
      if (user) {
        setContact({
          username: user.username,
          email: user.email,
          message: "",
        });
      }
  }, [user]);

  // tackle the handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle form getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify(contact),
      });

      if(response.ok){
        // console.log(response);
        setContact(setDefaultData);
        alert("Messaage sent successfully");
      }
    } catch (error) {
      console.log("Error occured while storing data");
    }
  };


  return (
    <>
      <section className="section-contact">
        
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <h1 className="main-heading mb-3">Contact Us</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDnMb84OQGCvF4k5M9Gv-SaicO4RZ5sa40&q=UB+City,Bengaluru+India"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};