import { NavLink } from "react-router-dom"

export const Error = () => {
    //Error Page
    return <>
        <section id="Section-Error">
            <div className="content">
                <h1>404</h1>
                <br/>
                <h4>Page Not Found</h4>
                <br />
                <p>Sorry but the page you are trying to access is not found. Please try to check what you typed again.
                    If you think its not you its us then report the problem.
                </p>
                <br />
                <div className="btns">
                    <NavLink to='/'>Return Home</NavLink>
                    <br />
                    <NavLink to='/Contact'>Report Problem</NavLink>

                </div> 
            </div>

        </section>
    </>
}