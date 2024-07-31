import { useAuth } from "../store/auth"

export const Services = () => {

    const {services} = useAuth();

    return <>
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">
                    Services
                </h1>
            </div>

            <div className="container grid grid-three-cols">
                { 
                services.map((curElem, index)=>{
                    
                    const {description, price, provider, service} = curElem;
                    return (
                <div className="card" key={index}>
                    <div className="card-image">
                        <img src="/images/design.png" alt="service1 image" width={400} />
                    </div>
                    <div className="card-details">
                        <div className="grid grid-two-cols">
                            <p>{provider}</p>
                            <p>{price}</p>
                        </div>
                        <p>{service}</p>
                        <p>{description}</p>
                    </div>
                </div>
                );
                })
                }

            </div>
        </section>
    
    </>
}