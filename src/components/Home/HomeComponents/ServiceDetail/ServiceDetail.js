import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    return (
        <div style={{backgroundColor: "#96bb7c"}} className="col-sm-4 border text-center py-2 my-2 hover">
            <img className="img-fluid" style={{height: '300px', width: '300px'}}src={service.imageURL} alt=""/>
            <h5 className="m-3">{service.name}</h5>
            <p>{service.description}</p>
            <Link className="btn btn-brand btn-text" to="/dashboard/appointment">See Details</Link>
        </div>
        
    );
};

export default ServiceDetail;