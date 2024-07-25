export const Home = () => {
    return <>
        <main>
            <section className="section-home">
                <div className="container grid grid-two-cols">
                    <div className="home-container">
                        <p>It solutions for your Business</p>
                        <h1>Welcome to Nux Corporation</h1>
                        <p>
                            Nux Corporation is professional services company specializing in Information technology services and consulting                        
                            Moto of the company and further introdcution.
                            Line 1 - This is a dummy text
                            Line 1 - This is a dummy text
                            Line 1 - This is a dummy text
                            Line 1 - This is a dummy text
                            Line 1 - This is a dummy text
                            Line 1 - This is a dummy text
                            Line 1 - This is a dummy text

                        </p>

                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect Now</button>
                            </a>
                            <a href="/services">
                                <button className="btn btn2">Learn more</button>
                            </a>
                        </div>
                    </div>

                    <div className="home-image">
                        <img src="/images/home.png" alt="home image" width={500} height={500} />
                    </div>
                </div>
            </section>

        </main>

        {/* 2nd section  */}
        <section class="section-analytics">
            <div class="container grid grid-four-cols">

            <div class="div1">
                <h2>20+</h2>
                <p>registered retailers</p>
            </div>

            <div class="div1">
                <h2>50,000+</h2>
                <p>Happy Clients</p>
            </div>

            <div class="div1">
                <h2>1M+</h2>
                <p>Products sold</p>
            </div>

            <div className="div1">  
                <h2>24/7</h2>
                <p>service</p>
                </div> 
            </div>
        </section>
        

        {/* 3rd section  */}
        <section className="section-home">
        <div className="container grid grid-two-cols">
            {/* hero images  */}
            <div className="home-image">
            <img
                src="/images/design.png"
                alt="coding together"
                width="400"
                height="500"
            />
            </div>

            <div className="home-container">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how Nux Co can help your business thrive in
                the digital age.
            </p>
            <div className="btn btn-group">
                <a href="/contact">
                <button className="btn">connect now</button>
                </a>
                <a href="/services">
                <button className="btn btn2">learn more</button>
                </a>
            </div>
            </div>
        </div>
        </section>

    </>
};