import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-sm-4 text-center">
            <img style={{height: '300px', width: '300px'}}src={service.img} alt=""/>
            <h5 className="m-3">{service.name}</h5>
            <p>{service.description}</p>
            <button className="btn btn-primary"> Book Now </button>
        </div>
    );
};

export default ServiceDetail;