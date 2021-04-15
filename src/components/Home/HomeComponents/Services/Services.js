import React from 'react';
import service1 from '../../../../images/service1.jpg'
import service2 from '../../../../images/service2.jpg'
import service3 from '../../../../images/service3.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const serviceData = [
        {
            name: 'Residential Project',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fuga ',
            img: service1
        },
        {
            name: 'Restoration Project',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fuga',
            img: service2
        },
        {
            name: 'Commercial Project',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fuga',
            img: service3
        }
    ]
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;