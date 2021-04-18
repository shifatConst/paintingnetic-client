import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);
    const api = "http://localhost:5000/services";
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <section style={{backgroundColor:"#fbe0c4"}} className="mt-5 pb-5">
            <div className="text-center">
                <h2 style={{color: '#331A20'}}>OUR SERVICES</h2>
                <h5>Services We Provide</h5>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-2 pt-5">
                {
                    services.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;